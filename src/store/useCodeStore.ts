import { defineStore } from "pinia";

export const useCodeStore = defineStore("codeStore", {
    state: () => {
        return {
            code: `<template>\n\n<\/template>\n\n<script>\nexport default{\n  name: \"ComponentName\",\n  data(){\n    return {\n\n    }\n  }\n\n}\n<\/script>\n\n<style>\n\n<\/style>`,
            targetCode: `Vue.component("ComponentName", {
  template: "",
  data(){
    return {

    }
  }
})`
        }
    },
    actions: {
        setCode(newCode: string){
            this.code = newCode;
        },
        setTargetCode(newCode: string){
            this.targetCode = newCode;
        }
    },
    getters: {
        getCode(): string{
            return this.code;
        },
        getTargetCode(): string{
            return this.targetCode;
        }
    }
})