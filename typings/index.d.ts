export interface ToastPluginApi {
    open(group: string, prop: any, color: string, prepend?: any): void

    success(group: string, prop: any): void

    error(group: string, prop: any): void

    info(group: string, prop: any): void

    warning(group: string, prop: any): void

    default(group: string, prop: any): void

    clear(group: string): void
}

declare module 'vue/types/vue' {
    interface Vue {
        readonly $toast: ToastPluginApi;
    }
}

declare const ToastPlugin: Plugin

export default ToastPlugin