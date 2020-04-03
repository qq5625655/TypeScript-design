import yuTable from './table.vue';

yuTable.install = function(Vue) {
  Vue.component(yuTable.name, yuTable);
};

export default yuTable;