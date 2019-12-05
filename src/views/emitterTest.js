function broadcast(componentName, eventName, params) {
    // 使用递归的方法进行相关处理
    this.$children.forEach(child => {
        
        const name = child.$options.name;
        if(name === componentName) {
            child.$emit.apply(child, [eventName].concat(params));
        }else {
            broadcast.apply(child, [componentName, eventName].concat([params]));
        }
    });
}
export default {
    methods: {
        dispatch(componentName, eventName, params) {
            let parent = this.$parent;
            let name = parent.$options.name;
            while (parent && name !== componentName) {
                parent = parent.$parent;
                if (parent) {
                    name = parent.$options.name;
                }
            }
            parent.$emit(eventName, params)
        },
        broadcast(componentName, eventName, params) {
            broadcast.call(this, componentName, eventName, params)
        }
        // emitUpdate(item){
            
        //     let parent = this.$parent;
        //     let name = parent.$options.name;
        //     while (parent && name !== componentName) {
        //         parent = parent.$parent;
        //         if (parent) {
        //             name = parent.$options.name;
        //         }
        //     }
        // }
    }
};
