import { defineNuxtPlugin } from '#app';
import { Application } from '@splinetool/runtime';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.provide('spline', Application);
});