// Tree shaking 只支持es模块的引入，底层是静态引入的方式
import { add } from './math';
add(1, 4)