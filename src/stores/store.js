import Vue from "vue";
import Vuex from "vuex";
import pathify from "./pathify";
import { make } from "vuex-pathify";

import createPersistedState from "vuex-persistedstate";

const state = {
  token: "",
  session: "",
  lang: "la",
  loading: false,
  modalAlert: null,
  confirmModal: false,
  step: 1,
  // registerData: null,
  // reqRegisterData: null,
  userBondReservation: [],
  OptionCurreny: [
    { item: "LAK", name: "LAK" },
    { item: "USD", name: "USD" },
    { item: "THB", name: "THB" },
    { item: "VND", name: "VND" },
  ],
  provinces: [
    { name: "ອັດຕະປື", item: "ATP" },
    { name: "ບໍ່ແກ້ວ", item: "BKO" },
    { name: "ບໍລິຄຳໄຊ", item: "BOL" },
    { name: "ຈຳປາສັກ", item: "CHP" },
    { name: "ຫົວພັນ", item: "HOP" },
    { name: "ຄຳມ່ວນ", item: "KHM" },
    { name: "ຫຼວງນ້ຳທາ", item: "LNT" },
    { name: "ຫຼວງພຣະບາງ", item: "LPQ" },
    { name: "ອຸດົມໄຊ", item: "ODX" },
    { name: "ຜົ້ງສາລີ", item: "PHO" },
    { name: "ສາລະວັນ", item: "SLV" },
    { name: "ສະຫວັນນະເຂດ", item: "SVK" },
    { name: "ເຊກອງ", item: "SKH" },
    { name: "ວຽງຈັນ", item: "VTP" },
    { name: "ນະຄອນຫຼວງວຽງຈັນ", item: "VTE" },
    { name: "ໄຊຍະບູລີ", item: "XYB" },
    { name: "ໄຊສົມບູນ", item: "XSB" },
    { name: "ຊຽງຂວາງ", item: "XKH" },
  ],
  branch: [
    {
      name: "ສຳນັກງານໃຫ່ຍ",
      item: "010",
    },
    {
      name: "ໜ່ວຍບໍລິການສາລາຄຳ",
      item: "011",
    },
    {
      name: "ໜ່ວຍບໍລິການ ຕະຫຼາດເຊົ້າ",
      item: "012",
    },
    {
      name: "ໜ່ວຍບໍລິການ ສີໄຄ",
      item: "013",
    },
    {
      name: "ໜ່ວຍບໍລິການ ດົງໂດກ",
      item: "014",
    },
    {
      name: "ໜ່ວຍບໍລິການ ດອນໜູນ",
      item: "015",
    },
    {
      name: "ໜ່ວຍບໍລິການ ໄອເຕັກ",
      item: "016",
    },
    {
      name: "ໜ່ວຍບໍລິການ ວັດໄຕ",
      item: "017",
    },
    {
      name: "ໜ່ວຍບໍລິການ ນາໄຊ",
      item: "018",
    },
    {
      name: "ສາຂາຈຳປາສັກ",
      item: "030",
    },
    {
      name: "ໜ່ວຍບໍລິການ ຫຼັກ 8 ຈຳປາສັກ",
      item: "031",
    },
    {
      name: "ໜ່ວຍບໍລິການ ຫຼັກ 7 ຈຳປາສັກ",
      item: "032",
    },
    {
      name: "ສາຂາສະຫວັນນະເຂດ",
      item: "050",
    },
    {
      name: "ໜ່ວຍບໍລິການ ເຊໂນ ສະຫວັນນະເຂດ",
      item: "051",
    },
    {
      name: "ໜ່ວຍບໍລິການ ແດນສະຫວັນ",
      item: "052",
    },
    {
      name: "ໜ່ວຍບໍລິການ ໄກສອນ",
      item: "053",
    },
    {
      name: "ສາຂາ ອັດຕະປີ",
      item: "060",
    },
    {
      name: "ສາຂາ ຊຽງຂວາງ",
      item: "070",
    },
    {
      name: "ໜ່ວຍບໍລິການ ໂພນສະຫວັນ ຊຽງຂວາງ",
      item: "071",
    },
    {
      name: "ສາຂາ ຫຼວງພະບາງ",
      item: "080",
    },
    {
      name: "ໜ່ວຍບໍລິການຫຼັກ 1 ຫຼວງພະບາງ",
      item: "081",
    },
    {
      name: "ສາຂາ ຄຳມ່ວນ",
      item: "090",
    },
    {
      name: "ໜ່ວຍບໍລິການຫຼັກ 3 ຄຳມ່ວນ",
      item: "091",
    },
    {
      name: "ສາຂາ ອູດົມໄຊ",
      item: "0100",
    },
    {
      name: "ໜ່ວຍບໍລິການ ບໍລິຄຳໄຊ",
      item: "0110",
    },
  ],
  user_bond_data: {
    FORMID: "",
  },
};

Vue.use(Vuex);
const mutations = make.mutations(state);
export default new Vuex.Store({
  state,
  mutations,
  plugins: [
    pathify.plugin,
    createPersistedState({
      key: "Eform",
      storage: window.sessionStorage,
    }),
  ],
});
