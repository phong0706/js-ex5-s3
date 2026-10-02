const priceS = 35000;
const priceM = 42000;
const priceL = 48000;
const priceT = 10000;

const tableOrders = ["MLT", "SSX", "LLTT"];
let totalShiftRevenue = 0;

for (let i = 0; i < tableOrders.length; i++) {
  const currentTableOrder = tableOrders[i];
  let tableBill = 0;

  for (let j = 0; j < currentTableOrder.length; j++) {
    const item = currentTableOrder[j];

    if (item === "X") {
      continue;
    }

    if (item === "S") {
      tableBill += priceS;
    } else if (item === "M") {
      tableBill += priceM;
    } else if (item === "L") {
      tableBill += priceL;
    } else if (item === "T") {
      tableBill += priceT;
    }
  }

  let finalTableBill = tableBill;
  if (tableBill > 100000) {
    finalTableBill = tableBill * 0.9;
  }

  totalShiftRevenue += finalTableBill;
  console.log("Bàn " + (i + 1) + " - Thanh toán: " + finalTableBill + " VNĐ");
}

console.log("Tổng doanh thu ca làm việc: " + totalShiftRevenue + " VNĐ");

/**
 * BANG DOI SOAT KET QUA
 * ---------------------------------------------------------------------------------------------------------------------------------
 * | Ban / Du lieu vao      | Chi tiet cac mon                     | Tong tien truoc giam gia    | Dieu kien giam gia (>100k)        | Thanh toan thuc te cuoi cung      |
 * ---------------------------------------------------------------------------------------------------------------------------------
 * | Ban 1: "MLT"           | M (42k) + L (48k) + T (10k)          | 100.000 VNĐ                 | Khong dat (> 100k moi giam)       | 100.000 VNĐ                       |
 * | Ban 2: "SSX"           | S (35k) + S (35k) + X (Huy - 0k)     | 70.000 VNĐ                  | Khong dat                         | 70.000 VNĐ                        |
 * | Ban 3: "LLTT"          | L (48k) + L (48k) + T (10k) + T (10k)| 116.000 VNĐ                 | Dat (> 100k, giam 10%)            | 104.400 VNĐ                       |
 * ---------------------------------------------------------------------------------------------------------------------------------
 * | Tong doanh thu ca      |                                      |                             |                                   | 274.400 VNĐ                       |
 * ---------------------------------------------------------------------------------------------------------------------------------
 */