export const GenderTypes = [
  { label: "Nam", value: "M" },
  { label: "Nữ", value: "F" },
  { label: "Khác", value: "O" }
];

export const BannerTypes = [
  { label: "Trang chủ top", value: 0 },
  { label: "Trang chủ middle", value: 10 },
  { label: "Trang chủ bottom", value: 20 },
  { label: "Background", value: 30 }
];

export const InvestmentPurposeTypes = [
  { label: "Sinh lời", value: 0 },
  { label: "Đám cưới", value: 10 },
  { label: "Mua nhà", value: 20 },
  { label: "Cho con đi du học", value: 30 },
  { label: "Tích lũy cho nghỉ hưu", value: 40 }
];

export const InvestmentPeriodTypes = [
  { label: "Ngắn hạn (3-5 năm)", value: 0 },
  { label: "Trung hạn (5-10 năm)", value: 10 },
  { label: "Dài hạn (Trên 10 năm)", value: 20 }
];

export const InvestmentAcceptableRiskTypes = [
  {
    label: "Đảm bảo an toàn và lợi nhuận ổn định, cao hơn lãi suất ngân hàng",
    value: 0
  },
  { label: "Cân bằng lợi nhuận và rủi ro trung bình", value: 10 },
  { label: "Mạo hiểm để có lợi nhuận cao", value: 20 }
];

export const ContactTypes = [
  {
    label: "Tư vấn sản phẩm",
    value: 0
  },
  {
    label: "Tư vấn giao dịch",
    value: 10
  },
  {
    label: "Đăng ký đối tác",
    value: 20
  },
  {
    label: "Các vấn đề khác",
    value: 30
  }
];

export const FundTypes = [
  {
    label: "Quỹ cân bằng",
    value: 10
  },
  {
    label: "Quỹ trái phiếu",
    value: 20
  },
  {
    label: "Quỹ cổ phiếu",
    value: 30
  },
  {
    label: "Quỹ hưu trí",
    value: 40
  },
  {
    label: "Quỹ ETF",
    value: 50
  },
  {
    label: "Quỹ hỗn hợp",
    value: 60
  }
];

export const booleanArrayValue = [
  { label: "Có", value: true },
  { label: "Không", value: false },
];

export const StorageFolder = {
  banner: "DCVFM/Images/Banner",
  fundCategory: "DCVFM/Images/FundCategory",
  faqCategory: "DCVFM/Images/FaqCategory",
  post: "DCVFM/Images/Post",
  podcast:"DCVFM/Podcasts"
};

export const FaqTypes = [
  { label: "DCVFM", value: 0 },
  { label: "RM", value: 4 },
];
export const AccountFilterType = {
  // Yêu cầu nâng cấp hạng mức
  PendingUpgradeLevel: 0,
  ApprovedUpgradeLevel: 1,
  RejectedUpgradeLevel: 2,

  // Yêu cầu sửa đổi thông tin
  PendingChangingInformation: 10,
  ApprovedChangingInformation: 11,
  RejectedChangingInformation: 12,

  // Tài khoản chờ duyệt
  PendingCreateTradingAccount: 20,
  ApprovedCreateTradingAccount: 30,
  RejectedCreateTradingAccount: 40
};

export const ConsentLetterStatus = {
  Unsent: 0,
  WaitingForApprove: 1,
  Approved: 2,
  Rejected: 3
}

export const VSDStatus = [
  {
    label: "Chờ xác nhận",
    value: 0
  },
  {
    label: "Đã xác nhận",
    value: 10
  },
  {
    label: "Từ chối",
    value: 20
  }
];

export const HardCopyDocumentStatus = [
  {
    label: "Chưa kích hoạt",
    value: 0
  },
  {
    label: "Chờ bổ sung",
    value: 10
  },
  {
    label: "Hoàn tất",
    value: 20
  }
];

export const DataType = {
  Custom: 0,
  DateTime: 1,
  Time: 3,
  PhoneNumber: 5,
  Currency: 6,
  Text: 7,
  EmailAddress: 10,
  Password: 11,
  Url: 12,
  ImageUrl: 13
};

export const OrderTypeList = {
  Normal: 0,
  SIP: 10
};

export const OrderTypes = [
  { label: "Linh Hoạt", value: 0 },
  { label: "iSaving", value: 10 }
];

export const OrderStatusTypes = [
  { label: "Lệnh đặt thành công", value: "2" },
  { label: "Đang xử lý", value: "3" },
  { label: "Chờ đối chiếu", value: "5" },
  { label: "Khớp lệnh thành công", value: "14" },
  { label: "Khớp tiền thành công", value: "20" },
  { label: "Khớp tiền không thành công", value: "21" },
  { label: "Đã sửa (lệnh gốc)", value: "8" },
  { label: "Đã hủy (lệnh gốc)", value: "9" },
  { label: "Từ chối", value: "11" },
  { label: "Hết hiệu lực", value: "12" },
  { label: "SubOrder_Ngừng tạm thời", value: "S" },
  { label: "SubOrder_Ngừng hẳn", value: "H" },
  { label: "SubOrder_Ngừng do CTQLQ chỉ định", value: "R" },
  { label: "SubOrder_Hoạt động", value: "A" },
  { label: "SubOrder_Đang xử lý", value: "K" },
  { label: "SubOrder_Đóng", value: "C" },
  { label: "SubOrder_Từ chối", value: "D" },
  { label: "SubOrder_Chờ đối chiếu", value: "W" },
  { label: "SubOrder_Chờ đóng", value: "Z" }
];

export const SRTypes = [
  { label: "Mua", value: "NS" },
  { label: "Bán", value: "NR" },
  { label: "Chuyển đổi", value: "SW" }
];

export const DkshType = [
  {
    label: "Chứng minh nhân dân",
    value: "001"
  },
  {
    label: "Căn cước công dân",
    value: "010"
  },
  {
    label: "Khác",
    value: "004"
  }
];

export const NotificationPlatformType = [
  {
    label: "Cả hai",
    value: 0
  },
  {
    label: "Web",
    value: 10
  },
  {
    label: "App",
    value: 20
  }
];


export const VfmLevelLables = [
  {
    label: "Cơ bản",
    value: 0
  },
  {
    label: "Không giới hạn",
    value: 20
  }
];

export const VfmLevelType = {
  Basic: 0,
  Unlimited: 20
};

export const NotificationTopics = [
  { value: 0, label: "Hệ thống" },
  { value: 10, label: "Tài khoản" },
  { value: 20, label: "Đặt lệnh" },
  { value: 30, label: "Kết quả giao dịch" },
  { value: 40, label: "Hỗ trợ" },
  { value: 50, label: "Khớp tiền" },
  { value: 60, label: "Nhắc nhở thanh toán" },
  { value: 70, label: "Tin nhắn" },
  { value: null, label: "Khác" }
];

export const PostTypeLables = [
  { value: 0, label: "Sự kiện" },
  { value: 1, label: "Tin tức" },
  { value: 2, label: "Podcast" },
  // { value: 3, label: "Thông báo" },
  { value: 4, label: "Video" }
];

export const PostType = {
  Event: 0,
  News: 1,
  Podcast:2,
  Notification:3,
  Video:4
};

export const PostFilterTypeLables = [
  //{ value: 0, label: "Nổi bật" },
  { value: 1, label: "Tin tức" },
  { value: 2, label: "Sự kiện" },
  { value: 3, label: "Media" },
  // { value: 4, label: "Connect" },
  { value: 5, label: "Kiến thức" }
];

export const ContactTimeLables = [
  {
    label: "9-12h",
    value: 0
  },
  {
    label: "14-17h",
    value: 1
  }
];


export const PostTagLevelLables = [
  {
    label: "Dragon Newbie",
    value: 0
  },
  {
    label: "DragonEdu",
    value: 10
  },
];


export const PlatformTypeLables = [
  {
    label: "Tất cả",
    value: 0
  },
  {
    label: "Web",
    value: 10
  },
  {
    label: "Mobile app",
    value: 20
  }
];