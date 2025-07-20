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
export type AppGroupHome = { props: {user: { result: App.Data.UserData; bindings: [] };serverTime: { result: string; bindings: [] };lazyServerTime: { result: string; bindings: [] }}; actions: {logout: { args: any; result: any; bindings: []; };confirmPassword: { args: any; result: any; bindings: []; };formsTest: { args: any; result: any; bindings: []; }}; params: {}; };
export type AppGroupLayout = { props: {user: { result: App.Data.UserData; bindings: [] }}; actions: {logout: { args: any; result: any; bindings: []; };confirmPassword: { args: any; result: any; bindings: []; }}; params: {}; };
export type AppGroupProfileIndex = { props: {user: { result: App.Data.UserData; bindings: [] }}; actions: {logout: { args: any; result: any; bindings: []; };confirmPassword: { args: any; result: any; bindings: []; };updateUser: { args: App.Data.Requests.UpdateProfileRequest; result: any; bindings: []; };deleteUser: { args: any; result: any; bindings: []; }}; params: {}; };
export type AppGroupProfilePassword = { props: {user: { result: App.Data.UserData; bindings: [] }}; actions: {logout: { args: any; result: any; bindings: []; };confirmPassword: { args: any; result: any; bindings: []; };resetPassword: { args: App.Data.Requests.ChangePasswordRequest; result: any; bindings: []; }}; params: {}; };
export type AuthGroupForgotPassword = { props: {}; actions: {sendResetLink: { args: App.Data.Requests.ForgotPasswordRequest; result: any; bindings: []; }}; params: {}; };
export type AuthGroupLayout = { props: {}; actions: {}; params: {}; };
export type AuthGroupLogin = { props: {}; actions: {login: { args: App.Data.Requests.LoginRequest; result: any; bindings: []; }}; params: {}; };
export type AuthGroupRegister = { props: {}; actions: {register: { args: App.Data.Requests.RegisterRequest; result: any; bindings: []; }}; params: {}; };
export type AuthGroupResetPasswordTokenParam = { props: {email: { result: string; bindings: [] }}; actions: {resetPassword: { args: App.Data.Requests.ResetPasswordRequest; result: any; bindings: []; }}; params: {token: string}; };
}
