
public class BinarySearch {
   public static Product Binary(Product[] prod,String name)
   {
	   int low=0;
	   int high=prod.length-1;
	   while(low<=high)
	   {
		   int mid=(low+high)/2;
		   int res=prod[mid].productName.compareToIgnoreCase(name);
		   if(res==0)
			   return prod[mid];
		   else if(res<0)
			   low=mid+1;
		   else
			   high=mid-1;
	   }
	   return null;
   }
}
