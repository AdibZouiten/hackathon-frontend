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
  import "./tableCustomer.css"

  import { Button } from "@/components/ui/button"
  import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
  import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"

import { Api } from "../../Api"

  
  const invoices = [
    {
      Name: "Jeff Doe",
      Room: 243,
      Status: "Fixed",
      Resolutiontime: 30,
    },
    {
      Name: "John Smith",
      Room: 105,
      Status: "Fixed",
      Resolutiontime: 30,
      },
      
      {
      Name: "Emily Johnson",
      Room: 318,
      Status: "Fixed",
      Resolutiontime: 30,
      },
      
      {
      Name: "Sarah Thompson",
      Room: 512,
      Status: "Fixed",
      Resolutiontime: 30,
      },
      
      {
      Name: "Michael Davis",
      Room: 415,
      Status: "Fixed",
      Resolutiontime: 30,
      },
      
      {
      Name: "Jessica Brown",
      Room: 627,
      Status: "Fixed",
      Resolutiontime: 30,
      },
      
      {
      Name: "David Wilson",
      Room: 201,
      Status: "Fixed",
      Resolutiontime: 30,
      },
      
      {
      Name: "Alex Miller",
      Room: 328,
      Status: "Fixed",
      Resolutiontime: 30,
      },
      
      {
      Name: "Olivia Harris",
      Room: 432,
      Status: "Fixed",
      Resolutiontime: 30,
      },
      
      {
      Name: "William Thompson",
      Room: 519,
      Status: "Fixed",
      Resolutiontime: 30,
      },

  ]
  
  export async function TableCustomer() {

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
    const issusData = issues.data;
    console.log(issusData);
  

  
    const orders = await api.serviceOrders.getServiceOrders();
    const ordersCount= orders.data.data?.length;

    return (
      <div className="data-table-customer">

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
            <strong className="block text-sm font-medium text-gray-500"> Orders </strong>

            <p>
              <span className="text-2xl font-medium text-gray-900">{ordersCount}</span>

              <span className="text-xs text-gray-500"> </span>
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
            <strong className="block text-sm font-medium text-gray-500"> issue report </strong>

            <p>
              <span className="text-2xl font-medium text-gray-900"> {issuesCount} </span>

              <span className="text-xs text-gray-500">  </span>
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
            <strong className="block text-sm font-medium text-gray-500"> Total Revenue </strong>

            <p>
              <span className="text-2xl font-medium text-gray-900"> $4404.32 </span>

              <span className="text-xs text-gray-500"></span>
            </p>
          </div>
        </article>
        </div>

      <Table>

        <TableCaption>A list of your recent customer issus</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Room</TableHead>
            <TableHead>Status</TableHead>
            <TableHead >Resolution time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {issusData.data?.map((issue) => (

          <TableRow key={issue.attributes?.roomnumber}>
                <TableCell className="font-medium">{issue.attributes?.title}</TableCell>
                <TableCell>{issue.attributes?.roomnumber}</TableCell>
                <TableCell><Badge>{issue.attributes?.status}</Badge></TableCell>
                <TableCell>{issue.attributes?.publishedAt}</TableCell>
            </TableRow>
  

    
          ))}
        </TableBody>
      </Table>
      </div>
    )
  }
  