
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
		path:'/move',
		redirect:'/move/nowplaying'
	}
	]
}
