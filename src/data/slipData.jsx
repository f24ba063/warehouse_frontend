//H2サーバ立ち上げ前に使ったダミー

export const slipHistory = [
    {
        slipId: "S001",
        type: "inbound",
        date: "2025-12-12",
        staff: "担当者A",
        warehouse: "倉庫1",
        destination: "",
        status: "下書き",
        items: [
            { code: "A001", name: "鉛筆", quantity: 10, shelf: "A1", remark: "" },
            { code: "A002", name: "消しゴム", quantity: 5, shelf: "A2", remark: "" },
        ],
    },
    {
        slipId: "S002",
        type: "outbound",
        date: "2025-12-11",
        staff: "担当者B",
        warehouse: "倉庫2",
        destination: "店A",
        status: "確認済",
        items: [
            { code: "A003", name: "ノート", quantity: 20, shelf: "B1", remark: "" },
        ],
    },
];