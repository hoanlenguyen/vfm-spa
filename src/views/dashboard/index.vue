<template>
  <div class="dashboard-container">
    <el-row :gutter="15">
      <el-col :lg="6" :md="12" :sm="12" :xs="24" class="mb-4">
        <ticket :height="100" :data="totalUser" class="card p-0"></ticket>
      </el-col>
      <el-col :lg="6" :md="12" :sm="12" :xs="24" class="mb-4">
        <weekly :height="100" :data="totalPendingUpgradeLevel" class="card p-0"></weekly>
      </el-col>
      <el-col :lg="6" :md="12" :sm="12" :xs="24" class="mb-4">
        <salestatistic :height="100" :data="totalPendingChangingInformation" class="card p-0"></salestatistic>
      </el-col>
      <el-col :lg="6" :md="12" :sm="12" :xs="24" class="mb-4">
        <newusers :data="order" :height="100" class="card p-0 card-info"></newusers>
      </el-col>
    </el-row>

    <!-- <el-row :gutter="15">
      <el-col :lg="6" :md="24" :sm="24" class="mb-4">
        <mytask class="card p-0"></mytask>
      </el-col>
      <el-col :lg="18" :md="24" :sm="24" class="mb-4">
        <orders class="card" :item-limit="5" card-title="Recent Orders" />
      </el-col>
    </el-row>
    <el-row :gutter="15">
      <el-col :sm="12" :xs="24" class="mb-4">
        <best-seller class="card p-0"></best-seller>
      </el-col>
      <el-col :sm="12" :xs="24" class="mb-4">
        <top-product :item-limit="4" card-title="Top Products" class="card p-0"></top-product>
      </el-col>
    </el-row>
    <el-row :gutter="15">
      <el-col :lg="6" :md="12" :sm="12" :xs="24" class="mb-4">
        <action-needed :height="100" class="card p-0"></action-needed>
      </el-col>
      <el-col :lg="6" :md="12" :sm="12" :xs="24" class="mb-4">
        <div class="card">
          <el-row type="flex" justify="space-between" align="middle" class="p-5x mb-0">
            <h3 class="card-title">
              <h4>My Activity</h4>
              <span class="card-sub-label">Today {{new Date() | shortDate}}</span>
            </h3>

            <div>
              <el-button plain size="mini" type="success" class="btn-text">
                <s-icon icon="el-icon-more"></s-icon>
              </el-button>
            </div>
          </el-row>
          <div style="padding: 1rem 2rem 1.4rem;">
            <el-timeline class="pl-0">
              <el-timeline-item placement="top" type="success" timestamp="08:45">Stand up meeting</el-timeline-item>
              <el-timeline-item placement="top" type="primary" timestamp="10:00">
                Make deposit
                <span class="c-success">USD 700</span> to Godaddy
              </el-timeline-item>
              <el-timeline-item placement="top" type="info" timestamp="11:15">
                <span class="text-muted">Using Laser Treatment to Help</span>
              </el-timeline-item>
              <el-timeline-item placement="top" type="success" timestamp="08:45">Stand up meeting</el-timeline-item>
              <el-timeline-item placement="top" type="primary" timestamp="10:00">
                Make deposit
                <span class="c-success">USD 700</span> to Godaddy
              </el-timeline-item>
              <el-timeline-item placement="top" type="info" timestamp="11:15">
                <span class="text-muted">Using Laser Treatment to Help</span>
              </el-timeline-item>
            </el-timeline>
          </div>
        </div>
      </el-col>
      <el-col :lg="6" :md="12" :sm="12" :xs="24" class="mb-4">
        <div class="card">
          <el-row type="flex" justify="space-between" align="middle" class="p-5x mb-0">
            <h3 class="card-title">
              <h4>Notifications</h4>
              <span class="card-sub-label">Recently notifications</span>
            </h3>

            <div>
              <el-button plain size="mini" type="success" class="btn-text">
                <s-icon icon="el-icon-more"></s-icon>
              </el-button>
            </div>
          </el-row>
          <div style="padding: 1rem 2rem 1.4rem;">
            <el-timeline class="pl-0">
              <el-timeline-item
                placement="top"
                type="danger"
                timestamp="08:45"
                icon="el-icon-phone"
              >Miss call from Mr.John</el-timeline-item>
              <el-timeline-item
                placement="top"
                type="primary"
                timestamp="10:00"
                icon="el-icon-alarm-clock"
              >
                Submited
                <span class="c-primary">KYC Application</span>
              </el-timeline-item>
              <el-timeline-item placement="top" type="info" timestamp="11:15">
                <span class="c-info">Candy ice cream cake.</span>
              </el-timeline-item>
              <el-timeline-item placement="top" timestamp="08:45">Halvah gummi bears Cupcake</el-timeline-item>
              <el-timeline-item
                placement="top"
                type="danger"
                timestamp="08:45"
                icon="el-icon-phone"
              >Miss call from Mr.John</el-timeline-item>
              <el-timeline-item placement="top" type="warning" timestamp="10:00">Launch Website</el-timeline-item>
            </el-timeline>
          </div>
        </div>
      </el-col>
      <el-col :lg="6" :md="12" :sm="12" :xs="24" class="mb-4">
        <div class="card">
          <el-row type="flex" justify="space-between" align="middle" class="p-5x mb-0">
            <h3 class="card-title">
              <h4>Trends</h4>
              <span class="card-sub-label">FEATURE OF THE WEEK</span>
            </h3>

            <div>
              <el-button plain size="mini" type="info" class="btn-text">View All</el-button>
            </div>
          </el-row>
          <div class="w-100 overflow-auto">
            <table class="el-table table-default w-100 border-0 rounded-0">
              <tbody>
                <tr>
                  <td>
                    <div class="cell">
                      <div class="d-flex align-items-center">
                        <s-avatar
                          shape="square"
                          :size="40"
                          :src="'https://images.unsplash.com/photo-1599597126727-51842bbacf2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'"
                        ></s-avatar>
                        <span class="ml-4">
                          <b class="d-block text-ellipsis">The retail road to recovery</b>
                          <small class="d-inline-block text-ellipsis">1 day ago</small>
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="cell">
                      <div class="d-flex align-items-center">
                        <s-avatar
                          shape="square"
                          :size="40"
                          :src="'https://images.unsplash.com/photo-1599592597811-1877b5902834?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'"
                        ></s-avatar>
                        <span class="ml-4">
                          <b class="d-block text-ellipsis">The auto industry’s</b>
                          <small class="d-inline-block text-ellipsis">5 day ago</small>
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="cell">
                      <div class="d-flex align-items-center">
                        <s-avatar
                          shape="square"
                          :size="40"
                          :src="'https://images.unsplash.com/photo-1599615332774-182413ebb8b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'"
                        ></s-avatar>
                        <span class="ml-4">
                          <b class="d-block text-ellipsis">Passions online</b>
                          <small class="d-inline-block text-ellipsis">3 hours ago</small>
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="cell">
                      <div class="d-flex align-items-center">
                        <s-avatar
                          shape="square"
                          :size="40"
                          :src="'https://images.unsplash.com/photo-1599638352687-763d660c197d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'"
                        ></s-avatar>
                        <span class="ml-4">
                          <b class="d-block text-ellipsis">Navigating your retail business</b>
                          <small class="d-inline-block text-ellipsis">15 minutes ago</small>
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="cell">
                      <div class="d-flex align-items-center">
                        <s-avatar
                          shape="square"
                          :size="40"
                          :src="'https://images.unsplash.com/photo-1599635370462-507623db1ba3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'"
                        ></s-avatar>
                        <span class="ml-4">
                          <b class="d-block text-ellipsis">The Update</b>
                          <small class="d-inline-block text-ellipsis">9 day ago</small>
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="cell">
                      <div class="d-flex align-items-center">
                        <s-avatar
                          shape="square"
                          :size="40"
                          :src="'https://images.unsplash.com/photo-1599628482471-a8c21c1bc14d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'"
                        ></s-avatar>
                        <span class="ml-4">
                          <b class="d-block text-ellipsis">How to lead your team</b>
                          <small class="d-inline-block text-ellipsis">4 day ago</small>
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </el-col>
    </el-row> -->
  </div>
</template>

<script>
import ApexChart from "vue-apexcharts";
import weekly from "./components/weekly-revenue";
import orders from "./components/orders";
import ticket from "./components/ticket-realtime";
import salestatistic from "./components/sale-statistics";
import newusers from "./components/new-users";
import mytask from "./components/my-task";
import BestSeller from "./components/best-seller";
import ActionNeeded from "./components/action-needed-2";
import TopProduct from "./components/top-products";
import {getStatisticUser} from "@/api/account"; 

export default {
  name: "DashboardAdmin",
  components: {
    weekly,
    apexchart: ApexChart,
    orders,
    ticket,
    salestatistic,
    newusers,
    mytask,
    BestSeller,
    ActionNeeded,
    TopProduct,
  },
  data() {
    return {
      totalUser:0,
      totalPendingChangingInformation :0,
      totalPendingUpgradeLevel:0,
      order:0,
    };
  },
  created(){
    this.getStatisticUser()
  },
  methods:{
    getStatisticUser(){
      getStatisticUser().then(resp=>{
        this.totalUser = resp.data.result.totalUser
        this.totalPendingChangingInformation = resp.data.result.totalPendingChangingInformation
        this.totalPendingUpgradeLevel = resp.data.result.totalPendingUpgradeLevel
        this.order = resp.data.result.totalOrder
      })
    }
  },
  computed:{

  },

};
</script>

<style lang="scss" scoped>

.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;
}
</style>
<style lang="scss">
.card-info {
  .el-button {
    background-color: rgba(246, 229, 254, 0.75) !important;
  }
  .title {
    color: #fff;
  }
  .sub-title {
    color: #e5e5e5;
  }
}
</style>
