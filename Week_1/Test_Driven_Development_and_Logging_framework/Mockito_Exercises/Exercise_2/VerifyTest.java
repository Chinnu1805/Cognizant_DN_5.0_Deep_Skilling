import static org.mockito.Mockito.*;

import org.junit.Test;
import org.mockito.Mockito;

public class VerifyTest {
	@Test
    public void testVerifyInteraction() {

        External mockApi=Mockito.mock(External.class);

        Service service=new Service(mockApi);

        service.fetchData();

        verify(mockApi).getData();
    }
}
