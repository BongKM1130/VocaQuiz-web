public class div1 {
    public static void main(String[] argc){
        System.out.println(div(3,0));
    }
    public static float div(float a,float b){
        if(b==0) System.out.println("0으로 나눌 수 없습니다.");
        return a/b;
    }
}
