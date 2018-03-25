package auction.main;

import auction.model.Entry;
import auction.service.EntryManager;
import auction.service.impl.EntryManagerImpl;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class TransactionManagerMain {

    public static void main(String[] args) {
        ClassPathXmlApplicationContext ctx = new ClassPathXmlApplicationContext(
                "beans.xml");

        EntryManager entryManager = ctx.getBean("entryManager",
                EntryManagerImpl.class);

        Entry entr = createDummyEntry();
        entryManager.createEntry(entr);

        ctx.close();
    }

    private static Entry createDummyEntry() {
        Entry entry = new Entry();
        entry.setId(2);
        entry.setLotId("kmalot01");
        entry.setUserId("kmauser2");
        entry.setPrice(50);
        return entry;
    }
}
