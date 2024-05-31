import { Keyring } from "@polkadot/keyring";
import { AccountManager, Robonomics } from "robonomics-interface";
import { reactive, ref, toRaw } from "vue";

export default {
  install: async (app, params) => {
    const isReady = ref(false);
    const instance = reactive({ value: undefined });
    app.provide("RobonomicsProvider", {
      isReady,
      instance
    });
    instance.value = await Robonomics.createInstance(params);
    toRaw(instance).value.setAccountManager(
      new AccountManager(new Keyring({ type: "ed25519" }))
    );
    isReady.value = true;
  }
};
