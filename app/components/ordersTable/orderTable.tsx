import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { Badge } from "@/components/ui/badge"
  import "./orderTable.css"
  

  const people = [
    {
      request: 'Airport Pickup',
      room: 'Room 234',
        date: '13/09/2022',
        imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      pendingTime: '3h ago',
    },
    {
      request: 'Food Delivery',
      room: 'Room 345',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        pendingTime: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      request: 'Massage',
      room: 'Room 345',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        pendingTime: '3h ago',
    },
    {
      request: 'Massage',
      room: 'Room 345',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        pendingTime: '3h ago',
    },
    {
      request: 'Massage',
      room: 'Room 345',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        pendingTime: '3h ago',
    },

  ]

  import { Api } from "../../Api"

  export async function OrderTable() {

    const api = new Api({
      baseUrl: `https://determined-boot-55a0a0a0d0.strapiapp.com/api`,
      baseApiParams: {
        headers: {
          Authorization: `Bearer e9a6bf8cfd2b4d799cba75db0a66c5a62d931d3114e48d45fe9af0095173b75b9950fe97e69e0ea024ca134fd04238d8a4687466722ec8eca9bbf9731beabce302c3d6e6ff4153127e93e47112eb7bfb954ab4d4df2e57ab07b4e3a98b51035a164909545e3018481bec078c98f4f00b7fdb2c7e349d82e947b6f08564477495`,
          accept: "application/json",
        },
      },
    });
  
  
    const issues = await api.issuesReports.getIssuesReports();
    const issuesCount= issues.data.data?.length;
    
  
  
    const orders = await api.serviceOrders.getServiceOrders({
      populate:'*',
    });
    const ordersCount= orders.data.data?.length;
    const ordersData = orders.data
    console.log(orders.data);


    const food = await api.foodOrderItems.getFoodOrderItems({
      populate:'*',
    });
    const foodData = orders.data
    console.log(foodData);


    return (
      <div>
      <div className="stats-row">

              
      <article
        className="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6"
      >
        <div
          className="inline-flex gap-2 self-end rounded bg-green-100 p-1 text-green-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
          </svg>

          <span className="text-xs font-medium"> 67.81% </span>
        </div>

        <div>
          <strong className="block text-sm font-medium text-gray-500"> Profit </strong>

          <p>
            <span className="text-2xl font-medium text-gray-900"> $404.32 </span>

            <span className="text-xs text-gray-500"> from $240.94 </span>
          </p>
        </div>
      </article>
      <article
        className="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6"
      >
        <div
          className="inline-flex gap-2 self-end rounded bg-green-100 p-1 text-green-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
          </svg>

          <span className="text-xs font-medium"> 67.81% </span>
        </div>

        <div>
          <strong className="block text-sm font-medium text-gray-500"> Profit </strong>

          <p>
            <span className="text-2xl font-medium text-gray-900"> $404.32 </span>

            <span className="text-xs text-gray-500"> from $240.94 </span>
          </p>
        </div>
      </article>
      <article
        className="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6"
      >
        <div
          className="inline-flex gap-2 self-end rounded bg-green-100 p-1 text-green-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
          </svg>

          <span className="text-xs font-medium"> 67.81% </span>
        </div>

        <div>
          <strong className="block text-sm font-medium text-gray-500"> Profit </strong>

          <p>
            <span className="text-2xl font-medium text-gray-900"> $404.32 </span>

            <span className="text-xs text-gray-500"> from $240.94 </span>
          </p>
        </div>
      </article>
      </div>
      
      <ul role="list" className="divide-y divide-gray-100">
      {ordersData.data?.map((orders) => (
        <li key={orders.attributes?.room_number} className="flex justify-between gap-x-6 py-5">
          <div className="flex gap-x-4">
          <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">Order from room {orders.attributes?.room_number}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{orders.attributes?.special_note}</p>
            </div>
          </div>
          <div className="hidden sm:flex sm:flex-col sm:items-end">
            
              <p className="mt-1 text-xs leading-5 text-gray-500">
                <time dateTime={orders.attributes?.datetime}>{orders.attributes?.datetime}</time>
              </p>
          </div>
        </li>
      ))}
    </ul>
    </div>
    )
}
