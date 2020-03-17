
export default{
	path:'/move',
	component:()=>import('@/views/Move'),
	children:[
	{
		path:'city',
		component:()=>import ('@/components/City')
	},
	{
		path:'comingsoon',
		component:()=>import ('@/components/ComingSoon')
	},
	{
		path:'nowplaying',
		component:()=>import ('@/components/Nowplaying')
	},
	{
		path:'search',
		component:()=>import ('@/components/Search')
	},
	{
		path:'detail/1/:moveId',
		components:{
			default:()=>import('@/components/Nowplaying'),
			detail:()=>import('@/views/Move/detail')
		},
		props:{
			detail:true
		}
	},
	{
		path:'detail/2/:moveId',
		components:{
			default:()=>import('@/components/ComingSoon'),
			detail:()=>import('@/views/Move/detail')
		},
		props:{
			detail:true
		}
	},
	{
		path:'/move',
		redirect:'/move/nowplaying'
	}
	]
}
