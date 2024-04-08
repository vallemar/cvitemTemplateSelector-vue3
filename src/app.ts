import CollectionView from "@nativescript-community/ui-collectionview/vue3";
import { createApp } from "nativescript-vue";
import Home from "./components/Home.vue";

createApp(Home).use(CollectionView).start();
