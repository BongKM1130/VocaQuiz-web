
public class pow1 {
    public static void main(String[] argc){
        System.out.println(pow(7,2));
    }
    public static int pow(int a,int b){
        if(b==0) return 1;
        return a * pow(a,b-1);

    }
}
