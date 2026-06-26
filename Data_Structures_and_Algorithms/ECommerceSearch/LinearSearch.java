
public class LinearSearch {
    public static Product Linear(Product[] prod,String name)
    {
    	for(int i=0;i<prod.length;i++)
    	{
    		 if (prod[i].productName.equalsIgnoreCase(name)) 
    		 {
                 return prod[i];
             }
    	}
    	return null;
    }
}
