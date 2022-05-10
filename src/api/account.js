import request from "@/utils/request";

export function getUserStatistic() {
  return request({
    url: "/api/services/app/User/getUserStatistic",
    method: "get",
  });
}

export function fetchList(query) {
  return request({
    url: "/api/services/app/Account/GetList",
    method: "get",
    params: query,
  });
}

export function getStatisticUser() {
  return request({
    url: "/api/services/app/Account/GetStatisticUser",
    method: "get",
  });
}

export function getForEdit(query) {
  return request({
    url: "/api/services/app/Account/GetForEdit",
    method: "get",
    params: query,
  });
}

export function updateUserProfile(data) {
  return request({
    url: "/api/services/app/Account/UpdateUserProfile",
    method: "put",
    data,
  });
}

export function deleteItem(id) {
  return request({
    url: "/api/services/app/User/Delete",
    method: "delete",
    params: { id },
  });
}

export function createOrUpdate(data) {
  if (!data.user.id) {
    return request({
      url: "/api/services/app/User/Create",
      method: "post",
      data,
    });
  } else {
    return request({
      url: "/api/services/app/User/Update",
      method: "put",
      data,
    });
  }
}
export function upgradeUserLevel(data) {
  return request({
    url: "/api/services/app/Account/UpgradeUserLevel",
    method: "post",
    data,
  });
}

export function manualCreateTradingAccount(data) {
  return request({
    url: "/api/services/app/Tps/ManualCreateTradingAccount",
    method: "post",
    data,
  });
}
export function updateUserInformation(data) {
  return request({
    url: "/api/services/app/Account/UpdateUserInformation",
    method: "put",
    data,
  });
}
export function bulkImport(data) {
  return request({
    url: "/api/services/app/Account/ImportFSSAccount",
    method: "post",
    data,
  });
}

export function getUserChangingInformation(query) {
  return request({
    url: "/api/services/app/User/GetUserChangingInformation",
    method: "get",
    params: query,
  });
}

export function updateChangingUserInformation(data) {
  return request({
    url: "/api/services/app/User/UpdateChangingUserInformation",
    method: "put",
    data,
  });
}

export function getAccountListExcel(query) {
  return request({
    url: "/api/services/app/Account/GetAccountListExcel",
    method: "get",
    params: query,
  });
}

export function sendVMFContractsToUser(query) {
  return request({
    url: "/api/services/app/Account/SendVMFContractsToUser",
    method: "get",
    params: query,
  });
}

export function getReportChangeCustomerInfo(query) {
  return request({
    url: "/api/services/app/Account/GetReportChangeCustomerInfo",
    method: "get",
    params: query,
  });
}

export function sendCustomerConsentLetterRequest(data) {
  return request({
    url: "api/services/app/RM/SendCustomerConsentLetterRequest",
    method: "post",
    data,
  });
}
