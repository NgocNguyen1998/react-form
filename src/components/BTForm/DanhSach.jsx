import React, { Component } from 'react'
import { connect } from 'react-redux'

 class DanhSach extends Component {
  render() {
    const {mangNguoiDung}  = this.props
    console.log(mangNguoiDung);
    return (
      <div className='mt-4'>
       <table className='table'>
        <thead className='bg-dark text-light'>
            <tr>
                <th>Mã Sinh Viên</th>
                <th>Họ Tên</th>
                <th>Số điện thoại</th>
                <th>Email</th>
                <th>Chức năng</th>
            </tr>
        </thead>
        <tbody>
            {mangNguoiDung.map((item)=>{
                  return <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.fullName}</td>
                    <td>{item.phoneNumber}</td>
                    <td>{item.email}</td>
                    <td>
                        <button className='btn btn-danger mr-2'>Xóa</button>
                        <button className='btn btn-info'>Chỉnh sửa</button>
                    </td>
                  </tr>
            }
          
            )}
        </tbody>
       </table>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
    return{
        mangNguoiDung: state.BaiTapForm.mangNguoiDung
    }
}

export default connect (mapStateToProps)(DanhSach)