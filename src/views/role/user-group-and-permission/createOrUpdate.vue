<template>
  <div class="createItemContainer">
    <el-dialog
      v-cloak
      :close-on-click-modal="false"
      :show-close="false"
      :title="formTitle"
      :visible.sync="showDialog"
      custom-class="dialogFullscreen"
      fullscreen
      @before-close="showDialog = false"
    >
      <template #title>
        <div class="dialogFullscreen__title">
          <span class="el-dialog__title">{{ formTitle }}</span>
          <el-button @click="closeDialog">{{ $t("Hủy") }}</el-button>
          <el-button :loading="isSubmit" type="primary" @click="saveItem" v-if="isAllowCreate && !model.id">{{
            $t("Lưu lại")
          }}</el-button>
          <el-button :loading="isSubmit" type="primary" @click="saveItem" v-if="isAllowEdit && model.id">{{
            $t("Lưu lại")
          }}</el-button>
        </div>
      </template>
      <s-tabs
        class="dialogFullscreen__tabs"
        :active-tab="activeTab"
        :tabs="tabs"
      />
      <div class="dialogFullscreen__content">
        <el-form ref="model" :model="model" label-position="top">
          <el-row id="general" :gutter="16">
            <div class="section-title">{{ $t("Thông tin chung") }}</div>
            <el-col :span="24">
              <el-row :gutter="16">
                <el-col :md="6" :sm="24">
                  <el-form-item
                    :label="$t('Tên')"
                    prop="name"
                    :rules="[
                      {
                        required: true,
                        message: $t('Vui lòng nhập tên bộ phận'),
                        trigger: ['blur']
                      }
                    ]"
                  >
                    <el-input v-model="model.name" clearable />
                  </el-form-item>
                </el-col>
                <el-col :md="6" :sm="24">
                  <el-form-item
                    :label="$t('Mô tả')"
                    prop="displayName"
                    :rules="[
                      {
                        required: true,
                        message: $t('Vui lòng nhập mô tả'),
                        trigger: ['blur']
                      }
                    ]"
                  >
                    <el-input v-model="model.displayName" clearable />
                  </el-form-item>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-form>
        <h4 class="text-center my-4" s>{{ $t("Phân quyền") }}</h4>

        <div class="mx-auto px-5" style="max-width:1200px">
          <div class="row">
            <div class="col-lg-4">
              <div v-for="(permission, index) in permissions" :key="index">
                <template v-if="index < 6">
                  <el-tree
                    :props="defaultProps"
                    :data="[...permission]"
                    show-checkbox
                    ref="tree"
                    node-key="name"
                    :default-checked-keys="model.grantedPermissions"
                    default-expand-all
                  >
                   <span class="custom-tree-node" slot-scope="{ node }">
                      <span>{{replaceText( node.label) }}</span>
                    </span>
                  </el-tree>
                </template>
              </div>
            </div>
            <div class="col-lg-4">
              <div class=" w-100">
                <div v-for="(permission, index) in permissions" :key="index">
                  <template v-if="index >= 6 && index < 14">
                    <el-tree
                      :props="defaultProps"
                      :data="[...permission]"
                      show-checkbox
                      ref="tree"
                      default-expand-all
                      node-key="name"
                      :default-checked-keys="model.grantedPermissions"
                    >
                     <span class="custom-tree-node" slot-scope="{ node }">
                      <span>{{replaceText( node.label) }}</span>
                    </span>
                    </el-tree>
                  </template>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class=" w-100">
                <div v-for="(permission, index) in permissions" :key="index">
                  <template v-if="index >= 14">
                    <el-tree
                      :props="defaultProps"
                      :data="[...permission]"
                      show-checkbox
                      ref="tree"
                      default-expand-all
                      node-key="name"
                      :default-checked-keys="model.grantedPermissions"
                    >
                     <span class="custom-tree-node" slot-scope="{ node }">
                      <span>{{replaceText( node.label) }}</span>
                    </span>
                    </el-tree>
                  </template>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </el-dialog>
    <pageLoading :loading="isLoading" />
  </div>
</template>

<script>
import { createOrUpdate, getForEdit } from "@/api/role";
import pageLoading from "@/components/Loading/pageLoading";

export default {
  components: { pageLoading },
  props: ["reloadData", "permissions",'isAllowCreate','isAllowEdit'],
  data: () => ({
    showDialog: false,
    model: {},
    isLoading: false,
    isSubmit: false,
    tabs: [
      {
        name: "general",
        label: "Thông tin chung"
      }
    ],
    activeTab: "general",
    open: [],
    defaultProps: {
      children: "children",
      label: "displayName"
    }
  }),
  computed: {
    formTitle() {
      return this.$route.query.id
        ? "Chi tiết bộ phận"
        : "Tạo bộ phận";
    }
  },
  watch: {
    "$route.query.id": function(val) {
      if (typeof val !== "undefined") {
        this.getDetail(val);
      }
    },
    showDialog: function(val) {
      if (!val) {
        this.closeDialog();
      }
    }
  },
  mounted() {
    if (typeof this.$route.query.id !== "undefined") {
      this.getDetail(this.$route.query.id);
    }
  },
  methods: {
    getDetail(id) {
      this.isLoading = true;
      getForEdit(id)
        .then(response => {
          this.showDialog = true;
          this.model = response.data.result;
        })
        .catch(error => {
          this.$message({
            type: "error",
            message: this.$t(`Lỗi: ${error.response.data.error.message}`),
            showClose: true
          });
        })
        .finally(() => {
          this.isLoading = false;
        });
    },

    saveItem() {
      this.$refs["model"].validate(valid => {
        if (valid) {
          let arrChecked = [];
          if (this.$refs["tree"]) {
            this.$refs["tree"].forEach(p => {
              let items = p.getCheckedNodes().map(p => p.name);
              arrChecked.push(...items);
            });
          }
          this.model.grantedPermissions = arrChecked;
          this.createOrUpdate();
        } else {
          this.$message({
            type: "error",
            message: this.$t("Bạn chưa nhập đủ thông tin"),
            showClose: true
          });
        }
      });
    },
    replaceText( displayName) {
      if (displayName)
        return displayName.replace("[LocalizableString: ","").replace(", Y]","");
      return "";
    },
    createOrUpdate() {
      this.isSubmit = true;
      return createOrUpdate(this.model)
        .then(response => {
          if (response.data.success) {
            this.$emit("reloadData");
            if (!this.model.id) {
              this.$message({
                type: "success",
                message: this.$t("Tạo bộ phận thành công"),
                showClose: true
              });
            } else {
              this.$message({
                type: "success",
                message: this.$t("Sửa bộ phận thành công"),
                showClose: true
              });
            }
            this.showDialog = false;
          }
        })
        .catch(error => {
          this.$message({
            type: "error",
            message: this.$t(`Lỗi ${error.response.data.error.message}`),
            showClose: true
          });
        })
        .finally(() => {
          this.isSubmit = false;
        });
    },
    closeDialog() {
      this.isTranslationValid = true;
      this.$refs.model.clearValidate();
      this.model = {};
      this.$router.replace({});
      this.showDialog = false;
    }
  }
};
</script>
