import React , {Component} from 'react';

import { Modal, Form, Input} from 'antd';

import styles from './UserModal.css';

const FormItem = Form.Item;

class UserEditModal extends Component{

    constructor(props){
        super(props);

        this.state = {
            visible: false
        };
    }

    showModalHandler = (e) =>{
        if(e) e.stopPropagation();
        this.setState({
            visible: true,
        });
    }

    hideModalHandler =() => {
        this.setState({
            visible: false,
        });
    }

    okHandler =() => {
        const { onOk } = this.props;
        this.props.form.validateFields((err, values) => {
            console.info(values);
            if(!err){
                onOk(values);
                this.hideModalHandler();
            }
        })
    }

    render(){
        const { children } = this.props;

        const { getFieldDecorator } = this.props.form;

        const { name, loginName, nickName, email, qq} = this.props.record;

        const formItemLayout = {
            labelCol: { span: 6},
            wrapperCol: { span: 14},
        };

        return (
            <span>
                <span onClick={this.showModalHandler}>
                    { children }
                </span>
                <Modal 
                    title= "编辑人员信息"
                    visible= {this.state.visible}
                    onOk= { this.okHandler}
                    onCancel={this.hideModalHandler}
                >
                    <Form horizontal onSubmit={this.okHandler}>
                        <FormItem
                        {...formItemLayout}
                        label="姓名"
                        >
                        {
                            getFieldDecorator('name', {
                            initialValue: name,
                            })(<Input />)
                        }
                        </FormItem>
                        <FormItem
                        {...formItemLayout}
                        label="昵称"
                        >
                        {
                            getFieldDecorator('nickName', {
                            initialValue: nickName,
                            })(<Input />)
                        }
                        </FormItem>
                        <FormItem
                        {...formItemLayout}
                        label="账号"
                        >
                        {
                            getFieldDecorator('loginName', {
                            initialValue: loginName,
                            })(<Input />)
                        }
                        </FormItem>
                        <FormItem
                        {...formItemLayout}
                        label="邮箱"
                        >
                        {
                            getFieldDecorator('email', {
                            initialValue: email,
                            })(<Input />)
                        }
                        </FormItem>
                        <FormItem
                        {...formItemLayout}
                        label="QQ"
                        >
                        {
                            getFieldDecorator('qq', {
                            initialValue: qq,
                            })(<Input />)
                        }
                        </FormItem>
                    </Form>
                </Modal>
            </span>
        );
    }
    
}

export default Form.create()(UserEditModal);
