public class Max2 {
    public static void main(String[] argc){
        int[] arr={1,3,15,7,50,11,13,7,67,19};
        int max=arr[0];

        for (int i=1;i<arr.length;i++){
            if (arr[i]>max){
                max=arr[i];
            }
        }
        System.out.println("Max: " + max);
    }
}
