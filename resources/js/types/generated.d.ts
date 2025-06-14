declare namespace App.Data {
export type UserData = {
id: number;
name: string;
email: string;
created_at: string;
updated_at: string;
};
}
declare namespace App.Data.Requests {
export type ChangePasswordRequest = {
old_password: string;
new_password: string;
};
export type ForgotPasswordRequest = {
email: string;
};
export type LoginRequest = {
email: string;
password: string;
};
export type RegisterRequest = {
name: string;
email: string;
password: string;
};
export type ResetPasswordRequest = {
email: string;
password: string;
};
export type UpdateProfileRequest = {
name: string;
email: string;
};
}
declare namespace ViperGen {
export type AppGroupHome = { props: {user: App.Data.UserData;serverTime: string;lazyServerTime: string}; actions: {logout: { args: any, result: any };confirmPassword: { args: any, result: any };formsTest: { args: any, result: any }}; params: {}; };
export type AppGroupLayout = { props: {user: App.Data.UserData}; actions: {logout: { args: any, result: any };confirmPassword: { args: any, result: any }}; params: {}; };
export type AppGroupProfileIndex = { props: {user: App.Data.UserData}; actions: {logout: { args: any, result: any };confirmPassword: { args: any, result: any };updateUser: { args: App.Data.Requests.UpdateProfileRequest, result: any };deleteUser: { args: any, result: any }}; params: {}; };
export type AppGroupProfilePassword = { props: {user: App.Data.UserData}; actions: {logout: { args: any, result: any };confirmPassword: { args: any, result: any };resetPassword: { args: App.Data.Requests.ChangePasswordRequest, result: any }}; params: {}; };
export type AuthGroupForgotPassword = { props: {}; actions: {sendResetLink: { args: App.Data.Requests.ForgotPasswordRequest, result: any }}; params: {}; };
export type AuthGroupLayout = { props: {}; actions: {}; params: {}; };
export type AuthGroupLogin = { props: {}; actions: {login: { args: App.Data.Requests.LoginRequest, result: any }}; params: {}; };
export type AuthGroupRegister = { props: {}; actions: {register: { args: App.Data.Requests.RegisterRequest, result: any }}; params: {}; };
export type AuthGroupResetPasswordTokenParam = { props: {email: string}; actions: {resetPassword: { args: App.Data.Requests.ResetPasswordRequest, result: any }}; params: {token: string}; };
}
