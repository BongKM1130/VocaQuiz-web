import java.util.Scanner;
public class Div {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("정수 입력: ");
        int num = sc.nextInt();

        if (num % 3 == 0){
            System.out.println("A");
        }else if(num % 3 == 1){
            System.out.println("B");
        }else {
            System.out.println("C");
        }
    }
}
