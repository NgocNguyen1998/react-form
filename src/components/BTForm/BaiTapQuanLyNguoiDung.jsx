import React, { Component } from 'react'
import DanhSach from './DanhSach'
import Form from './Form'

export default class BaiTapQuanLyNguoiDung extends Component {
  render() {
    return (
      <div className='container'>
        <h2 className='text-center p-4'>Quản lý Danh sách Người Dùng</h2>
        <Form/>
        <DanhSach/>
      </div>
    )
  }
}
