/**
 * 随机算法程序 输出一个随机算法 可以调整参数 可以计算
 * @overview 在axios上二次封装的请求方法
 * @author [luoluo]
 */

// declare Algorithm {
//     staticY:number;
//     calculation:Function;
//     update:Function;
// }

class Algorithm {
  staticY: number = 1;
  calculationFn: Function = function(x: number): number {
    return x;
  };
  constructor() {
    this.calculationFn = getCalculation(Math.floor(Math.random() * 32));
  }
  calculation(x: number): number {
    return this.calculationFn(x, this.staticY);
  }
  update(type: boolean = true) {
    if (type) {
      this.staticY++;
    } else {
      this.staticY--;
    }
  }
}

function getCalculation(type: number): Function {
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
      return function(x: number, y: number): number {
        return Math.atan2(y, x);
      };
    case 6:
      return function(x: number, y: number): number {
        return Math.ceil(x);
      };
    case 7:
      return function(x: number, y: number): number {
        return Math.cos(x);
      };
    case 8:
      return function(x: number, y: number): number {
        return Math.exp(x);
      };
    case 9:
      return function(x: number, y: number): number {
        return Math.floor(x);
      };
    case 10:
      return function(x: number, y: number): number {
        return Math.log(x);
      };
    case 11:
      return function(x: number, y: number): number {
        return Math.max(x, y);
      };
    case 12:
      return function(x: number, y: number): number {
        return Math.min(x, y);
      };
    case 13:
      return function(x: number, y: number): number {
        return Math.pow(x, y);
      };
    case 14:
      return function(x: number, y: number): number {
        return Math.random();
      };
    case 15:
      return function(x: number, y: number): number {
        return Math.round(x);
      };
    case 16:
      return function(x: number, y: number): number {
        return Math.sin(x);
      };
    case 17:
      return function(x: number, y: number): number {
        return Math.sqrt(x);
      };
    case 18:
      return function(x: number, y: number): number {
        return Math.tan(x);
      };
    case 19:
      return function(x: number, y: number): number {
        return Math.E;
      };
    case 20:
      return function(x: number, y: number): number {
        return Math.LN2;
      };
    case 21:
      return function(x: number, y: number): number {
        return Math.LN10;
      };
    case 22:
      return function(x: number, y: number): number {
        return Math.LOG2E;
      };
    case 23:
      return function(x: number, y: number): number {
        return Math.LOG10E;
      };
    case 24:
      return function(x: number, y: number): number {
        return Math.PI;
      };
    case 25:
      return function(x: number, y: number): number {
        return Math.SQRT1_2;
      };
    case 26:
      return function(x: number, y: number): number {
        return Math.SQRT2;
      };
    case 27:
      return function(x: number, y: number): number {
        return x + y;
      };
    case 28:
      return function(x: number, y: number): number {
        return x - y;
      };
    case 29:
      return function(x: number, y: number): number {
        return x * y;
      };
    case 30:
      return function(x: number, y: number): number {
        return x / y;
      };
    default:
      return function(x: number, y: number): number {
        return x;
      };
  }
}
