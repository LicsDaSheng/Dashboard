import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;
import styles from './index.css';

const NormalLoginForm = React.createClass({
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const {doLogin} =this.props;
                doLogin(values);
            }
        });


    },
    render() {
        const { getFieldDecorator } = this.props.form;
        const {err} = this.props;
        const ErrorProp = err ===""?null:<div className="ant-form-explain" style={{color:"red"}}>{err}</div>
        return (
            <Form onSubmit={this.handleSubmit} className={styles.loginForm}>
                {ErrorProp}
                <FormItem>
                    {getFieldDecorator('loginName', {
                        rules: [{ required: true, message: '用户名不能为空!' }],
                    })(
                        <Input addonBefore={<Icon type="user" />} placeholder="用户名" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('passwd', {
                        rules: [{ required: true, message: '密码不能为空!' }],
                    })(
                        <Input addonBefore={<Icon type="lock" />} type="password" placeholder="密码" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>记住我</Checkbox>
                    )}
                    <a className={styles.loginFormForgot}>忘记密码</a>
                    <Button type="primary" htmlType="submit" className={styles.loginFormButton}>
                        Log in
                    </Button>
                    Or <a>register now!</a>
                </FormItem>
            </Form>
        );
    }
});

export default Form.create()(NormalLoginForm);