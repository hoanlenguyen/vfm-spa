<template>
  <div class="card">
    <div class="card-header">
      <div
        class="
          d-flex
          flex-column flex-md-row
          justify-content-between
          align-items-stretch
        "
      >
        <h3 class="mb-3 card-title">
          <span class="card-label">{{ $t("Dịch ngôn ngữ") }}</span>
        </h3>
        <!-- <div
          class="d-flex flex-column flex-md-row align-items-stretch align-items-sm-center justify-content-end"
        >
          <div class="d-flex justify-content-end">
            <div class="m-2">
              <el-button
                icon="el-icon-circle-plus-outline"
                size="medium"
                type="info"
                @click="handleCreate"
                >{{ $t("Tạo mới") }}
              </el-button>
            </div>
          </div>
        </div> -->
      </div>
    </div>
    <div
      class="
        card-toolbox
        d-flex
        flex-column flex-md-row
        justify-content-end
        align-items-stretch
      "
    >
      <div
        class="
          d-flex
          flex-column flex-md-row
          align-items-stretch align-items-sm-center
          justify-content-end
        "
      >
        <div class="m-2">
          <el-checkbox v-model="filter.isNotTranslated">Chưa dịch</el-checkbox>
        </div>
        <div class="m-2">
          <el-select
            v-model="filter.languageName"
            class="filter-item w-100"
            clearable
            filterable
            :placeholder="$t('Ngôn ngữ')"
          >
            <el-option
              v-for="item in languageTexts"
              :key="item.id"
              :value="item.value"
              :label="item.label"
            />
          </el-select>
        </div>
        <div class="m-2">
          <el-input
            v-model="filter.keyword"
            :placeholder="$t('Tìm theo bản dịch')"
            clearable
            @clear="filter.keyword = null"
          />
        </div>
        <div class="m-2">
          <el-input
            v-model="filter.key"
            :placeholder="$t('Tìm theo bản gốc')"
            clearable
            @clear="filter.key = null"
          />
        </div>
        <div class="d-flex justify-content-end">
          <div class="m-2">
            <el-button plain type="success" @click="loadData">
              <i class="las la-search" />
              <span>{{ $t("Tìm kiếm") }}</span>
            </el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="p-0 pb-5 card-body">
      <el-table
        v-loading="listLoading"
        class="border-0 rounded-0"
        :data="list"
        fit
        show-overflow-tooltip
        stripe
        @sort-change="handleSort"
      >
        <el-table-column
          :label="$t('Ngôn ngữ')"
          max-width="150px"
          prop="languageName"
          sortable="custom"
        >
          <template slot-scope="scope">
            <div
              class="py-1 w-max-100 text-ellipsis pointer c-blue d-inline-block"
              :title="scope.row.name"
              @click="handleEdit(scope.row)"
            >
              <span v-if="scope.row.languageName == 'vi'">Tiếng Việt</span>
              <span v-else>Tiếng Anh</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column :label="$t('Bản gốc')" prop="key">
          <template slot-scope="scope">
            {{ scope.row.key }}
          </template>
        </el-table-column>
        <el-table-column :label="$t('Bản dịch')" prop="value">
          <template slot-scope="scope">
            <a
              @click.prevent="handleEdit(scope.row)"
              class="editLink"
              style="color: #000"
              >{{ scope.row.value }}</a
            >
          </template>
        </el-table-column>
      </el-table>

      <s-pagination
        v-if="total > 0"
        :current-page.sync="paging.page"
        :page-size.sync="filter.rowsPerPage"
        :page-sizes="[10, 20, 50, 100, 200, 500, 1000]"
        :total="total"
        auto-scroll
        background
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="loadData"
        @current-change="loadData"
      />
    </div>

    <createOrUpdate @reloadData="loadData" />
  </div>
</template>

<script>
import { fetchList, deleteItem } from "@/api/language";
import createOrUpdate from "./createOrUpdate";

export default {
  name: "LanguageList",
  components: { createOrUpdate },
  data() {
    return {
      listLoading: false,
      total: 0,
      list: null,
      paging: {
        page: 1,
      },
      languageTexts: [
        { value: "vi", text: "Tiếng việt" },
        { value: "en", text: "Tiếng anh" },
      ],
      filter: {
        rowsPerPage: 10,
        sortBy: "id",
        sortDirection: "descending",
        keyword: "",
        key: "",
        bannerType: "",
        languageName: "",
      },
      keyword: "",
      key: "",
    };
  },
  watch: {
    filter: {
      handler: function () {
        this.reloadData();
      },
      deep: true,
    },
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      this.listLoading = true;
      fetchList({ ...this.filter, ...this.paging })
        .then((response) => {
          if (response.data.result) {
            this.list = response.data.result.items;
            this.total = response.data.result.totalCount;
          }
        })
        .catch((error) => {
          if (error.response) {
            this.$message({
              type: "error",
              message: this.$t(`Lỗi: ${error.response.data.error.message}`),
              showClose: true,
            });
          }
        })
        .finally(() => {
          this.listLoading = false;
        });
    },
    reloadData() {
      this.loadData();
    },
    handleSort({ prop, order }) {
      if (!prop) return;
      this.filter.sortBy = prop;
      this.filter.sortDirection = order || "descending";
    },
    handleCreate() {
      this.$router.push({
        path: this.$route.path,
        query: { id: "" },
      });
    },
    handleEdit(item) {
      this.$router.push({
        path: this.$route.path,
        query: { keyText: item.key },
      });
    },
    handleDelete(id) {
      this.$confirm(
        `${this.$t("Bạn có chắc muốn xóa banner này?")}`,
        `${this.$t("Cảnh báo")}`,
        {
          confirmButtonText: this.$t("Tiếp tục"),
          cancelButtonText: this.$t("Hủy"),
          type: "warning",
        }
      )
        .then(() => {
          deleteItem(id)
            .then((response) => {
              if (response.data.success) {
                this.$message({
                  type: "success",
                  message: `${this.$t("Xóa banner thành công")}`,
                  showClose: true,
                });
                this.reloadData();
              }
            })
            .catch((error) => {
              if (error.response) {
                this.$message({
                  type: "error",
                  message: `${error.response.data.error}`,
                  showClose: true,
                });
              }
            });
        })
        .catch((_) => {});
    },
  },
};
</script>
