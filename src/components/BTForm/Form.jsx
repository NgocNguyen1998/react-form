import React, { Component } from 'react'
import { connect } from 'react-redux'

class Form extends Component {
    state = {
        sinhVien: {
            id: '',
            fullName: '',
            phoneNumber: '',
            email: ''
        },
        search:{
            timkiem:''
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

    handleSearch = (event)=>{
        this.setState({
            search:{
                ...this.state.search,
                [event.target.name]: event.target.value
            }
        })
    }
    static getDerivedStateFromProps = (nextProps, currentState) => {

        if (nextProps.selectedUser && nextProps.selectedUser.id !== currentState.sinhVien.id) {
            currentState.sinhVien = nextProps.selectedUser
        }
        return currentState
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.dispatch({
            type: this.props.selectedUser ? 'UPLOAD_USER' : 'ADD_USER',
            payload: this.state.sinhVien
        })

        this.setState({
            sinhVien: {
                id: '',
                fullName: '',
                phoneNumber: '',
                email: ''
            }
        })

    }


    render() {
console.log(this.state.search);
        return (
            <div>
                <h2 className='bg-dark text-light p-3'>Thông tin sinh viên</h2>
                <form className='mt-4' onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <div className="col">
                            <label >Mã sinh viên</label>
                            <input required onChange={this.handleState} name='id' value={this.state.sinhVien.id} type="text" className="form-control "
                            placeholder="Mã sinh viên" />
                        </div>
                        <div className="col">
                            <label >Họ tên</label>
                            <input required onChange={this.handleState} name='fullName' value={this.state.sinhVien.fullName} type="text" className="form-control" placeholder="Họ tên" />
                        </div>
                    </div>
                    <div className="form-row mt-3 mb-3">
                        <div className="col">
                            <label >Số điện thoại</label>
                            <input required onChange={this.handleState} name='phoneNumber' value={this.state.sinhVien.phoneNumber} type="number" className="form-control" placeholder="Số điện thoại" />
                        </div>
                        <div className="col">
                            <label >Email</label>
                            <input required onChange={this.handleState} name='email' value={this.state.sinhVien.email} type="text" className="form-control" placeholder="Email" />
                        </div>
                    </div>
                    {!this.props.selectedUser ? <button type='submit' className='btn btn-success mr-2'>Thêm</button> : <button type='submit' className='btn btn-warning '>Cập Nhật</button>}
                    

                </form>
                <div className="form-row mt-3 mb-3">
                        <div >
                            <input name='timkiem' onChange={this.handleSearch} type="text" placeholder='Tìm kiếm theo tên' className='pt-1 pb-1 pr-5' />
                            <button className='btn btn-success p-1' onClick={()=>{
                                this.props.dispatch({
                                    type: 'SEARCH_USER',
                                    payload: this.state.search.timkiem,
                                })
                            }}>Search</button>
                        </div>

                    </div>
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