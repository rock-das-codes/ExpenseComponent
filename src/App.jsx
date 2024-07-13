
import './App.css'
import data from "./../data.json"


function App() {
 const bar = data.map((inddata)=>{ return(<div key={inddata.day} className=''>
  <div  className={`bg-red-400 inline-block cursor-pointer active:bg-blue-500 hover:bg-blue-200 group w-8 mx-2 rounded `} style={{ height: `${inddata.amount * 2}px` }}> <div className='absolute ml-1 text-xs text-center top-[61%]'> {inddata.day} </div>
  <div className='bg-black text-white text-xs rounded-lg relative top-[-26px] hidden group-hover:block text-center py-2  mb-4 h-6 w-10  '>{"$"+inddata.amount}</div></div></div>)
 })

  return (
    <>
      <div className="bg-red-100 flex justify-center  items-center w-full h-screen">
        <div>
          <div className='flex bg-red-400 text-white px-2 py-1 rounded-xl w-full'><div className='w-1/2 px-4 py-4'> <span className="text-sm">My balance</span><span className="text-lg font-bold"> $921.48</span></div>
          <div className='w-1/2 '><img className='w-[30%] relative top-[30%] float-end ' src="./../images/logo.svg"/></div>

          </div>
          <div className='bg-white w-full mt-4 py-4 rounded '>
            <span className="my-4 mx-4 text-xl px-4 font-bold">Spending - Last 7 days</span>
            <div className='w-full px-2 mt-10 flex items-end'>
            {bar}

            </div>
            {/* <div className='bg-black w-full h-[3px] mt-12'></div> */}
            <div className='w-full px-4 flex pb-8 mt-12 justify-between'>
              
              <div className='flex mt-4 flex-col' ><span> Total this month</span> <span className='text-3xl font-bold'> $478.33</span></div>
              <div className='flex mt-8  items-end flex-col'><span className=' text-sm font-bold'>+2.4%</span> <span> From last month</span></div>
              

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
