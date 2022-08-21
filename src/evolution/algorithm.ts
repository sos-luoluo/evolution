/**
 * 随机算法程序 输出一个随机算法 可以调整参数 可以计算
 * @overview 在axios上二次封装的请求方法
 * @author [luoluo]
 */

class Algorithm {
  type: number;
  calculationFn: (x: number, y?: number) => number;
  constructor(type: number) {
    this.type = type;
    this.calculationFn = getCalculation(type);
  }
  calculation(x: number, y: number): number {
    return this.calculationFn(x, y);
  }
}
/**
 * 返回一个随机数
 * @param type
 * @returns
 */

function getCalculation(type: number): (x: number, y?: number) => number {
  switch (type) {
    case 0:
      return function(x: number, y?: number): number {
        return Math.abs(x);
      };
    case 1:
      return function(x: number, y?: number): number {
        return Math.acos(x);
      };
    case 2:
      return function(x: number, y?: number): number {
        return Math.asin(x);
      };
    case 3:
      return function(x: number, y?: number): number {
        return Math.asin(x);
      };
    case 4:
      return function(x: number, y?: number): number {
        return Math.atan(x);
      };
    case 5:
      return function(x: number, y: number = 1): number {
        return Math.atan2(y, x);
      };
    case 6:
      return function(x: number, y: number = 1): number {
        return Math.ceil(x);
      };
    case 7:
      return function(x: number, y: number = 1): number {
        return Math.cos(x);
      };
    case 8:
      return function(x: number, y: number = 1): number {
        return Math.exp(x);
      };
    case 9:
      return function(x: number, y: number = 1): number {
        return Math.floor(x);
      };
    case 10:
      return function(x: number, y: number = 1): number {
        return Math.log(x);
      };
    case 11:
      return function(x: number, y: number = 1): number {
        return Math.max(x, y);
      };
    case 12:
      return function(x: number, y: number = 1): number {
        return Math.min(x, y);
      };
    case 13:
      return function(x: number, y: number = 1): number {
        return Math.pow(x, y);
      };
    case 14:
      return function(x: number, y: number = 1): number {
        return Math.random();
      };
    case 15:
      return function(x: number, y: number = 1): number {
        return Math.round(x);
      };
    case 16:
      return function(x: number, y: number = 1): number {
        return Math.sin(x);
      };
    case 17:
      return function(x: number, y: number = 1): number {
        return Math.sqrt(x);
      };
    case 18:
      return function(x: number, y: number = 1): number {
        return Math.tan(x);
      };
    case 19:
      return function(x: number, y: number = 1): number {
        return Math.E;
      };
    case 20:
      return function(x: number, y: number = 1): number {
        return Math.LN2;
      };
    case 21:
      return function(x: number, y: number = 1): number {
        return Math.LN10;
      };
    case 22:
      return function(x: number, y: number = 1): number {
        return Math.LOG2E;
      };
    case 23:
      return function(x: number, y: number = 1): number {
        return Math.LOG10E;
      };
    case 24:
      return function(x: number, y: number = 1): number {
        return Math.PI;
      };
    case 25:
      return function(x: number, y: number = 1): number {
        return Math.SQRT1_2;
      };
    case 26:
      return function(x: number, y: number = 1): number {
        return Math.SQRT2;
      };
    case 27:
      return function(x: number, y: number = 1): number {
        return x + y;
      };
    case 28:
      return function(x: number, y: number = 1): number {
        return x - y;
      };
    case 29:
      return function(x: number, y: number = 1): number {
        return x * y;
      };
    case 30:
      return function(x: number, y: number = 1): number {
        return x / y;
      };
    default:
      return function(x: number, y: number = 1): number {
        return x;
      };
  }
}

class Cell extends Algorithm {
  failNumber: number = 0;
  onfail?: () => void;
  constructor(type: number) {
    super(type);
  }
  pushFailNumber(): void {
    this.failNumber++;
    if (this.failNumber >= 3 && this.onfail) {
      this.onfail();
    }
  }
  test(x: number, y: number): number {
    const res = this.calculation(x, y);
    return res;
  }
}

export class Pool {
  typeRange = [0, 30];
  cache: Set<Cell> = new Set();
  constructor() {
    for (let i = this.typeRange[0]; i <= this.typeRange[1]; i++) {
      const cell = new Cell(i);
      this.cache.add(cell);
      cell.onfail = () => {
        this.cache.delete(cell);
      };
    }
  }
  testAll(x: number, y: number, z: number) {
    const res = [];
    for (let cell of this.cache) {
      res.push({
        value: cell.test(x, y),
        cell
      });
    }
    res.sort((a, b) => {
      return a.value - z - (b.value - z);
    });
    res.forEach((item, i) => {
      if (item.value !== z) {
        if (Number.isNaN(item.value) && Number.isNaN(z)) {
          //
        } else {
          item.cell.pushFailNumber();
        }
      }
    });
  }
  printAlive() {
    console.log(`现有生存数量${this.cache.size}`);
    for (let cell of this.cache) {
      console.log(`生存细胞Type${cell.type}`);
    }
  }
}

export class AutoTest {
  x = [1, 100];
  y = [1, 100];
  list: Array<{ x: number; y: number; z: number }> = [];
  constructor(type: number) {
    console.log(`测试使用的Type${type}`);
    const fn = getCalculation(type);
    for (let i = this.x[0]; i <= this.x[1]; i++) {
      for (let j = this.y[0]; j <= this.y[1]; j++) {
        this.list.push({
          x: i,
          y: j,
          z: fn(i, j)
        });
      }
    }
  }
}
