const state={
	nm:window.localStorage.getItem('nowNM')||'北京1',
	id:window.localStorage.getItem('nowID')||1
};
const action={
	
};
const mutations={
	//，命名大写
	CITY_INFO(state,payload){
		state.nm=payload.nm;
		state.id=payload.id;
	}
}
export default{
	//匿名空间
	namespaced:true,
	state,
	action,
	mutations
	
}
