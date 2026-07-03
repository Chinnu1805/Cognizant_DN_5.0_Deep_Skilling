import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class StringTest {

	@Test
    public void testLength() {
        StringOperations obj=new StringOperations();

        int result=obj.getLength("Hello");
        assertEquals(5, result);
    }

    @Test
    public void testUpperCase() {
        StringOperations obj=new StringOperations();
        String result=obj.convertToUpper("hello");
        assertEquals("HELLO", result);
    }
}