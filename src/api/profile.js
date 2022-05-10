import request from "@/utils/request";

export function getCurrentProfile() {
  return request({
    url: "/api/services/app/Profile/GetCurrentCompactUserProfile",
    method: "get"
  });
}

export function updateCurrentProfile(data) {
  return request({
    url: "/api/services/app/Profile/UpdateCurrentUserProfile",
    method: "PUT",
    data: data
  });
}

export function updateUserAvatar(data) {
  return request({
    url: "/api/services/app/Profile/UpdateUserAvatar",
    method: "PUT",
    data: {
      avatarUrl: data
    }
  });
}

export function changePassword(data) {
  return request({
    url: "/api/services/app/Profile/ChangePassword",
    method: "POST",
    data
  });
}
export function changeAdminPassword(data) {
  return request({
    url: "/api/services/app/Profile/ChangeAdminPassword",
    method: "POST",
    data
  });
}
