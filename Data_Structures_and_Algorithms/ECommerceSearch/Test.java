import java.util.Scanner;

public class Test {
    public static void main(String[] args)
    {
    	Scanner sc=new Scanner(System.in);
    	System.out.println("Enter number of Products:");
    	int n=sc.nextInt();
    	Product[] prod=new Product[n];
    	
    	for(int i=0;i<n;i++)
    	{
    		System.out.println("Enter the product Id:");
    		int id=sc.nextInt();
    		sc.nextLine();
    		System.out.println("Enter Product name:");
    		String name=sc.nextLine();
    		System.out.println("Enter Product category:");
    		String categ=sc.nextLine();
    		prod[i]=new Product(id,name,categ);
    	}
    	
    	System.out.println("Enter the Product to search:");
    	String searchProd=sc.nextLine();
    	Product found1=LinearSearch.Linear(prod, searchProd);
    	
    	if(found1!=null)
    	{
    		System.out.println("After Linear Search, Found the Product!");
    		System.out.println("ID:"+found1.productId+"\nName:"+found1.productName+"\nCategory:"+found1.category);
    	}
    	else
    		System.out.println("Can't Find the Product by Linear Search");
    	
    
    	
    	Product found2=BinarySearch.Binary(prod, searchProd);
    	if(found2!=null)
    	{
    		System.out.println("After Binary Search, Found the Product!");
    		System.out.println("ID:"+found2.productId+"\nName:"+found2.productName+"\nCategory:"+found2.category);
    	}
    	else
    		System.out.println("Can't Find the Product by Binary Search");
    
    	sc.close();
    }
}
