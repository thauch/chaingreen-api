const SERVICE = {
  daemon: 'daemon',
  fullNode: 'chaingreen_full_node',
  farmer: 'chaingreen_farmer',
  harvester: 'chaingreen_harvester',
  wallet: 'chaingreen_wallet',
  walletUi: 'wallet_ui',
  plotter: 'chaingreen plots create',
};
const SERVICE_TYPE = {
  fullNode: 1,
  harvester: 2,
  farmer: 3,
  timelord: 4,
  introducer: 5,
  wallet: 6,
};
const PLOTTING_STATE = {
  queued: 'SUBMITTED',
  running: 'RUNNING',
  error: 'ERROR',
  deleted: 'DELETED',
  finished: 'FINISHED',
};

module.exports = {
  SERVICE,
  SERVICE_TYPE,
  PLOTTING_STATE,
};
