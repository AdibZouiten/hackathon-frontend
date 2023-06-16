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
  
  export function OrderTable() {
    return (
      <div className="data-table-order">
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

        <Table className="order-table">

        <TableCaption>A list of your recent customer Orders</TableCaption>
        <TableHeader>
        <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Room</TableHead>
            <TableHead>Status</TableHead>
            <TableHead >Resolution time</TableHead>
        </TableRow>
        </TableHeader>
        <TableBody>
        {invoices.map((issue) => (
            <TableRow key={issue.Room}>
            <TableCell className="font-medium">{issue.Name}</TableCell>
            <TableCell>{issue.Room}</TableCell>
            <TableCell><Badge>{issue.Status}</Badge></TableCell>
            <TableCell>{issue.Resolutiontime}</TableCell>
            </TableRow>
        ))}
        </TableBody>
        </Table>
      </div>
    )
  }
  