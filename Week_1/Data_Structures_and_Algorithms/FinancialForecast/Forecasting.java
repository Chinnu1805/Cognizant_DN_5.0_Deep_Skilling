
public class Forecasting {
    public static double FutureValue(double current,int years)
    {
    	if(years==0)
    		return current;
    	else
    		return FutureValue(current,years-1)+5000;
    }
}
