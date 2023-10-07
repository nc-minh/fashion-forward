export const Footer = () => {
  return (
    <footer className="flex items-center justify-center flex-col p-4 bg-white border-t-2">
      <div className="flex justify-around p-4 w-full text-lg">
        <div className="flex flex-col">
          <strong className="text-lg">Liên hệ</strong>
          <ul>
            <li className="py-1">
              Địa chỉ liên hệ: Số 29 Liễu Giai, Ngọc Khánh, Ba Đình, Hà Nội
            </li>
            <li className="py-1">Điện thoại: 0339900890</li>
            <li className="py-1">Email: nguyencongminh.official@gmail.com</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <strong className="text-lg">Hỗ trợ</strong>
          <ul>
            <li className="py-1">Giới thiệu</li>
            <li className="py-1">Mạng xã hội</li>
            <li className="py-1">Hỏi đáp</li>
            <li className="py-1">Chính sách khách hàng</li>
            <li className="py-1">Chính sách vận chuyển</li>
          </ul>
        </div>
      </div>
      <p>© 2023 FASHION FORWARD</p>
    </footer>
  );
};
