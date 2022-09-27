import React, { Component } from 'react'
import { connect } from 'react-redux'

class Form extends Component {
    state = {
        sinhVien: {

            id: '',
            fullName: '',
            phoneNumber: '',
            email: ''

        }
    }

    handleState = (event) => {
        this.setState({
            sinhVien: {
                ...this.state.sinhVien,
                [event.target.name]: event.target.value
            }
        })
      
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.dispatch({
            type: 'ADD_USER',
            payload: this.state.sinhVien
        })
    }


    render() {
        console.log(this.state.sinhVien);
        return (
            <div>
                <h2 className='bg-dark text-light p-3'>Thông tin sinh viên</h2>
                <form className='mt-4' onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <div className="col">
                            <label >Mã sinh viên</label>
                            <input onChange={this.handleState} name='id' type="text" className="form-control" placeholder="Mã sinh viên" />
                        </div>
                        <div className="col">
                            <label >Họ tên</label>
                            <input onChange={this.handleState} name='fullName' type="text" className="form-control" placeholder="Họ tên" />
                        </div>
                    </div>
                    <div className="form-row mt-3 mb-3">
                        <div className="col">
                            <label >Số điện thoại</label>
                            <input onChange={this.handleState} name='phoneNumber' type="number" className="form-control" placeholder="Số điện thoại" />
                        </div>
                        <div className="col">
                            <label >Email</label>
                            <input onChange={this.handleState} name='email' type="text" className="form-control" placeholder="Email" />
                        </div>
                    </div>
                    <button type='submit' className='btn btn-success mr-2'>Thêm</button>
                    <button type='submit' className='btn btn-warning '>Cập Nhật</button>
                </form>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.BaiTapForm
    }
}
export default connect(mapStateToProps)(Form)