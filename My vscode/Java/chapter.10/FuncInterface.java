@FunctionalInterface
interface Op {
    double op(double a,double b);
}
public class FuncInterface {
    public static void main(String[] args) {
        Op plus=(a,b) -> a+b;
        Op minus= (a,b) -> a-b;
        System.out.println(plus.op(2,3));
        System.out.println(minus.op(2,3));
    }
    
}