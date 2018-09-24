export const getFamousPeopleState = store => store.famousPeople;

export const getFamousPeopleList = store => (getFamousPeopleState(store) ? getFamousPeopleState(store).famousPeople : []);

export const getFamousPeopleLoading = store => (getFamousPeopleState(store) ? getFamousPeopleState(store).loading : false);

export const getFamousPeopleError = store => (getFamousPeopleState(store) ? getFamousPeopleState(store).error : false);
