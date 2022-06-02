import { txClient, queryClient, MissingWalletError , registry} from './module'

import { CooperationNetworkFeatures } from "./module/types/crossdomain/cooperation_network_features"
import { DecisionPolicy } from "./module/types/crossdomain/decision_policy"
import { ForwardPolicy } from "./module/types/crossdomain/forward_policy"
import { LocalDomain } from "./module/types/crossdomain/local_domain"
import { LocalDomainCertificate } from "./module/types/crossdomain/local_domain_certificate"
import { Params } from "./module/types/crossdomain/params"
import { PrivateKey } from "./module/types/crossdomain/private_key"
import { RootCertificate } from "./module/types/crossdomain/root_certificate"
import { Validity } from "./module/types/crossdomain/validity"


export { CooperationNetworkFeatures, DecisionPolicy, ForwardPolicy, LocalDomain, LocalDomainCertificate, Params, PrivateKey, RootCertificate, Validity };

async function initTxClient(vuexGetters) {
	return await txClient(vuexGetters['common/wallet/signer'], {
		addr: vuexGetters['common/env/apiTendermint']
	})
}

async function initQueryClient(vuexGetters) {
	return await queryClient({
		addr: vuexGetters['common/env/apiCosmos']
	})
}

function mergeResults(value, next_values) {
	for (let prop of Object.keys(next_values)) {
		if (Array.isArray(next_values[prop])) {
			value[prop]=[...value[prop], ...next_values[prop]]
		}else{
			value[prop]=next_values[prop]
		}
	}
	return value
}

function getStructure(template) {
	let structure = { fields: [] }
	for (const [key, value] of Object.entries(template)) {
		let field: any = {}
		field.name = key
		field.type = typeof value
		structure.fields.push(field)
	}
	return structure
}

const getDefaultState = () => {
	return {
				Params: {},
				PrivateKey: {},
				LocalDomainCertificate: {},
				RootCertificate: {},
				LocalDomain: {},
				ForwardPolicy: {},
				Validity: {},
				ValidityAll: {},
				DecisionPolicy: {},
				CooperationNetworkFeatures: {},
				
				_Structure: {
						CooperationNetworkFeatures: getStructure(CooperationNetworkFeatures.fromPartial({})),
						DecisionPolicy: getStructure(DecisionPolicy.fromPartial({})),
						ForwardPolicy: getStructure(ForwardPolicy.fromPartial({})),
						LocalDomain: getStructure(LocalDomain.fromPartial({})),
						LocalDomainCertificate: getStructure(LocalDomainCertificate.fromPartial({})),
						Params: getStructure(Params.fromPartial({})),
						PrivateKey: getStructure(PrivateKey.fromPartial({})),
						RootCertificate: getStructure(RootCertificate.fromPartial({})),
						Validity: getStructure(Validity.fromPartial({})),
						
		},
		_Registry: registry,
		_Subscriptions: new Set(),
	}
}

// initial state
const state = getDefaultState()

export default {
	namespaced: true,
	state,
	mutations: {
		RESET_STATE(state) {
			Object.assign(state, getDefaultState())
		},
		QUERY(state, { query, key, value }) {
			state[query][JSON.stringify(key)] = value
		},
		SUBSCRIBE(state, subscription) {
			state._Subscriptions.add(JSON.stringify(subscription))
		},
		UNSUBSCRIBE(state, subscription) {
			state._Subscriptions.delete(JSON.stringify(subscription))
		}
	},
	getters: {
				getParams: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Params[JSON.stringify(params)] ?? {}
		},
				getPrivateKey: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.PrivateKey[JSON.stringify(params)] ?? {}
		},
				getLocalDomainCertificate: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.LocalDomainCertificate[JSON.stringify(params)] ?? {}
		},
				getRootCertificate: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.RootCertificate[JSON.stringify(params)] ?? {}
		},
				getLocalDomain: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.LocalDomain[JSON.stringify(params)] ?? {}
		},
				getForwardPolicy: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ForwardPolicy[JSON.stringify(params)] ?? {}
		},
				getValidity: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Validity[JSON.stringify(params)] ?? {}
		},
				getValidityAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ValidityAll[JSON.stringify(params)] ?? {}
		},
				getDecisionPolicy: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.DecisionPolicy[JSON.stringify(params)] ?? {}
		},
				getCooperationNetworkFeatures: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.CooperationNetworkFeatures[JSON.stringify(params)] ?? {}
		},
				
		getTypeStructure: (state) => (type) => {
			return state._Structure[type].fields
		},
		getRegistry: (state) => {
			return state._Registry
		}
	},
	actions: {
		init({ dispatch, rootGetters }) {
			console.log('Vuex module: crossdomain.crossdomain initialized!')
			if (rootGetters['common/env/client']) {
				rootGetters['common/env/client'].on('newblock', () => {
					dispatch('StoreUpdate')
				})
			}
		},
		resetState({ commit }) {
			commit('RESET_STATE')
		},
		unsubscribe({ commit }, subscription) {
			commit('UNSUBSCRIBE', subscription)
		},
		async StoreUpdate({ state, dispatch }) {
			state._Subscriptions.forEach(async (subscription) => {
				try {
					const sub=JSON.parse(subscription)
					await dispatch(sub.action, sub.payload)
				}catch(e) {
					throw new Error('Subscriptions: ' + e.message)
				}
			})
		},
		
		
		
		 		
		
		
		async QueryParams({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryParams()).data
				
					
				commit('QUERY', { query: 'Params', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryParams', payload: { options: { all }, params: {...key},query }})
				return getters['getParams']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryParams API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryPrivateKey({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryPrivateKey()).data
				
					
				commit('QUERY', { query: 'PrivateKey', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryPrivateKey', payload: { options: { all }, params: {...key},query }})
				return getters['getPrivateKey']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryPrivateKey API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryLocalDomainCertificate({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryLocalDomainCertificate()).data
				
					
				commit('QUERY', { query: 'LocalDomainCertificate', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryLocalDomainCertificate', payload: { options: { all }, params: {...key},query }})
				return getters['getLocalDomainCertificate']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryLocalDomainCertificate API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryRootCertificate({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryRootCertificate()).data
				
					
				commit('QUERY', { query: 'RootCertificate', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryRootCertificate', payload: { options: { all }, params: {...key},query }})
				return getters['getRootCertificate']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryRootCertificate API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryLocalDomain({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryLocalDomain()).data
				
					
				commit('QUERY', { query: 'LocalDomain', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryLocalDomain', payload: { options: { all }, params: {...key},query }})
				return getters['getLocalDomain']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryLocalDomain API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryForwardPolicy({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryForwardPolicy()).data
				
					
				commit('QUERY', { query: 'ForwardPolicy', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryForwardPolicy', payload: { options: { all }, params: {...key},query }})
				return getters['getForwardPolicy']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryForwardPolicy API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryValidity({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryValidity( key.id)).data
				
					
				commit('QUERY', { query: 'Validity', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryValidity', payload: { options: { all }, params: {...key},query }})
				return getters['getValidity']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryValidity API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryValidityAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryValidityAll(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryValidityAll({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'ValidityAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryValidityAll', payload: { options: { all }, params: {...key},query }})
				return getters['getValidityAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryValidityAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryDecisionPolicy({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryDecisionPolicy()).data
				
					
				commit('QUERY', { query: 'DecisionPolicy', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryDecisionPolicy', payload: { options: { all }, params: {...key},query }})
				return getters['getDecisionPolicy']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryDecisionPolicy API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryCooperationNetworkFeatures({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryCooperationNetworkFeatures()).data
				
					
				commit('QUERY', { query: 'CooperationNetworkFeatures', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryCooperationNetworkFeatures', payload: { options: { all }, params: {...key},query }})
				return getters['getCooperationNetworkFeatures']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryCooperationNetworkFeatures API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		async sendMsgCreateDecisionPolicy({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateDecisionPolicy(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateDecisionPolicy:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateDecisionPolicy:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDeleteForwardPolicy({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeleteForwardPolicy(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteForwardPolicy:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDeleteForwardPolicy:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdatePrivateKey({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdatePrivateKey(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdatePrivateKey:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdatePrivateKey:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDeleteCooperationNetworkFeatures({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeleteCooperationNetworkFeatures(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteCooperationNetworkFeatures:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDeleteCooperationNetworkFeatures:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreateRootCertificate({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateRootCertificate(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateRootCertificate:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateRootCertificate:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDeleteDecisionPolicy({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeleteDecisionPolicy(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteDecisionPolicy:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDeleteDecisionPolicy:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreateLocalDomain({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateLocalDomain(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateLocalDomain:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateLocalDomain:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreateCooperationNetworkFeatures({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateCooperationNetworkFeatures(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateCooperationNetworkFeatures:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateCooperationNetworkFeatures:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDeletePrivateKey({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeletePrivateKey(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeletePrivateKey:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDeletePrivateKey:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateLocalDomain({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateLocalDomain(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateLocalDomain:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateLocalDomain:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDeleteLocalDomain({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeleteLocalDomain(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteLocalDomain:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDeleteLocalDomain:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreateValidity({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateValidity(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateValidity:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateValidity:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDeleteValidity({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeleteValidity(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteValidity:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDeleteValidity:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateValidity({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateValidity(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateValidity:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateValidity:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreatePrivateKey({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreatePrivateKey(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreatePrivateKey:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreatePrivateKey:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateLocalDomainCertificate({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateLocalDomainCertificate(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateLocalDomainCertificate:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateLocalDomainCertificate:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateCooperationNetworkFeatures({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateCooperationNetworkFeatures(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateCooperationNetworkFeatures:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateCooperationNetworkFeatures:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreateForwardPolicy({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateForwardPolicy(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateForwardPolicy:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateForwardPolicy:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDeleteRootCertificate({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeleteRootCertificate(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteRootCertificate:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDeleteRootCertificate:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreateLocalDomainCertificate({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateLocalDomainCertificate(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateLocalDomainCertificate:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateLocalDomainCertificate:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDeleteLocalDomainCertificate({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeleteLocalDomainCertificate(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteLocalDomainCertificate:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDeleteLocalDomainCertificate:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgConfigureLocalDomain({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgConfigureLocalDomain(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgConfigureLocalDomain:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgConfigureLocalDomain:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateDecisionPolicy({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateDecisionPolicy(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateDecisionPolicy:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateDecisionPolicy:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateForwardPolicy({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateForwardPolicy(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateForwardPolicy:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateForwardPolicy:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateRootCertificate({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateRootCertificate(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateRootCertificate:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateRootCertificate:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		
		async MsgCreateDecisionPolicy({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateDecisionPolicy(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateDecisionPolicy:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateDecisionPolicy:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgDeleteForwardPolicy({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeleteForwardPolicy(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteForwardPolicy:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDeleteForwardPolicy:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdatePrivateKey({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdatePrivateKey(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdatePrivateKey:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdatePrivateKey:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgDeleteCooperationNetworkFeatures({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeleteCooperationNetworkFeatures(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteCooperationNetworkFeatures:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDeleteCooperationNetworkFeatures:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCreateRootCertificate({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateRootCertificate(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateRootCertificate:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateRootCertificate:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgDeleteDecisionPolicy({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeleteDecisionPolicy(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteDecisionPolicy:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDeleteDecisionPolicy:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCreateLocalDomain({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateLocalDomain(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateLocalDomain:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateLocalDomain:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCreateCooperationNetworkFeatures({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateCooperationNetworkFeatures(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateCooperationNetworkFeatures:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateCooperationNetworkFeatures:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgDeletePrivateKey({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeletePrivateKey(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeletePrivateKey:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDeletePrivateKey:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateLocalDomain({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateLocalDomain(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateLocalDomain:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateLocalDomain:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgDeleteLocalDomain({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeleteLocalDomain(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteLocalDomain:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDeleteLocalDomain:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCreateValidity({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateValidity(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateValidity:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateValidity:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgDeleteValidity({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeleteValidity(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteValidity:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDeleteValidity:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateValidity({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateValidity(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateValidity:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateValidity:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCreatePrivateKey({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreatePrivateKey(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreatePrivateKey:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreatePrivateKey:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateLocalDomainCertificate({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateLocalDomainCertificate(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateLocalDomainCertificate:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateLocalDomainCertificate:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateCooperationNetworkFeatures({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateCooperationNetworkFeatures(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateCooperationNetworkFeatures:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateCooperationNetworkFeatures:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCreateForwardPolicy({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateForwardPolicy(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateForwardPolicy:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateForwardPolicy:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgDeleteRootCertificate({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeleteRootCertificate(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteRootCertificate:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDeleteRootCertificate:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCreateLocalDomainCertificate({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateLocalDomainCertificate(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateLocalDomainCertificate:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateLocalDomainCertificate:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgDeleteLocalDomainCertificate({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeleteLocalDomainCertificate(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteLocalDomainCertificate:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDeleteLocalDomainCertificate:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgConfigureLocalDomain({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgConfigureLocalDomain(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgConfigureLocalDomain:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgConfigureLocalDomain:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateDecisionPolicy({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateDecisionPolicy(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateDecisionPolicy:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateDecisionPolicy:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateForwardPolicy({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateForwardPolicy(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateForwardPolicy:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateForwardPolicy:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateRootCertificate({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateRootCertificate(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateRootCertificate:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateRootCertificate:Create Could not create message: ' + e.message)
				}
			}
		},
		
	}
}
