import { Button } from "@/components/ui/button";
import { db } from "../_lib/prisma";
import { ArrowDownUpIcon } from "lucide-react";
import { DataTable } from "@/components/ui/data-table";
import { TransactionColumns } from "./_columns";

const TransactionsPage = async () => {
  const transactions = await db.transaction.findMany({});
  return (
    <div className="p-6 space-y-6" >
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Transações</h1>
        <Button className="rounded-full text-white">
          Adicionar transações
          <ArrowDownUpIcon />{" "}
        </Button>
      </div>
      <DataTable columns={TransactionColumns} data={transactions}/>
      {/* {transactions.map((transaction) => (
                <div key={transaction.id}>{transaction.name}</div>
            ))} */}
    </div>
  );
};

export default TransactionsPage;
