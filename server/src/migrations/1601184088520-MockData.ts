import { MigrationInterface, QueryRunner } from "typeorm";

export class MockData1601184088520 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (1, true, 282.98, 'Etiam faucibus cursus urna. Ut tellus.', 2158.06, 4, 8, 6, 3);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (2, true, 2364.64, 'Pellentesque ultrices mattis odio. Donec vitae nisi.', 8068.58, 1, 1, 1, 5);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (3, true, 5125.84, 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 4379.24, 9, 2, 5, 1);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (4, false, 1367.72, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.', 2892.15, 6, 9, 8, 6);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (5, true, 3206.93, 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 5418.39, 10, 7, 10, 6);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (6, false, 8689.11, 'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.', 2675.47, 1, 10, 8, 10);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (7, true, 4222.26, 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.', 4411.06, 6, 9, 6, 4);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (8, true, 4498.11, 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.', 2891.54, 9, 8, 9, 6);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (9, true, 6502.58, 'Sed ante.', 3534.18, 8, 8, 5, 4);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (10, true, 1807.2, 'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.', 2645.83, 6, 4, 6, 4);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (11, true, 2001.82, 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.', 4340.47, 6, 8, 6, 9);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (12, false, 3763.91, 'Integer ac leo.', 4665.06, 7, 5, 5, 1);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (13, false, 6848.16, 'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.', 4196.99, 10, 2, 10, 7);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (14, false, 7046.86, 'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 5107.35, 6, 2, 10, 10);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (15, false, 4697.02, 'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 1570.53, 2, 9, 10, 10);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (16, false, 8562.03, 'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.', 4445.59, 2, 4, 1, 5);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (17, true, 1943.41, 'Aliquam erat volutpat. In congue.', 2815.95, 3, 2, 9, 5);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (18, false, 9676.23, 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.', 3663.29, 2, 3, 8, 3);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (19, true, 3065.78, 'Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 2857.65, 6, 1, 2, 4);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (20, true, 6543.52, 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.', 8236.36, 10, 7, 3, 2);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (21, true, 4893.46, 'Sed accumsan felis.', 1845.02, 8, 4, 2, 10);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (22, false, 8602.71, 'Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.', 1729.97, 5, 5, 3, 6);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (23, true, 9255.63, 'Vivamus vestibulum sagittis sapien.', 7837.52, 1, 3, 5, 10);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (24, false, 4163.96, 'Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.', 7673.38, 3, 5, 2, 9);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (25, false, 7171.65, 'Vestibulum rutrum rutrum neque.', 208.86, 3, 2, 4, 4);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (26, false, 3579.57, 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 2936.11, 6, 2, 10, 7);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (27, false, 2933.49, 'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 907.32, 2, 4, 4, 6);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (28, false, 3629.51, 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.', 1420.56, 2, 6, 1, 10);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (29, true, 2954.86, 'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', 475.84, 1, 2, 6, 4);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (30, false, 3461.35, 'Duis bibendum. Morbi non quam nec dui luctus rutrum.', 5644.91, 2, 3, 5, 4);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (31, true, 9282.49, 'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.', 5380.48, 4, 8, 1, 8);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (32, false, 7785.35, 'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.', 1687.86, 8, 4, 2, 2);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (33, false, 3099.93, 'Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.', 8441.3, 2, 6, 8, 8);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (34, false, 4486.64, 'Sed sagittis.', 9814.28, 1, 6, 8, 7);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (35, false, 3283.76, 'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.', 9938.82, 3, 2, 4, 9);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (36, true, 9641.43, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus.', 3080.94, 1, 8, 6, 8);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (37, false, 6810.0, 'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.', 6106.63, 8, 8, 9, 3);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (38, false, 9339.91, 'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.', 5989.5, 2, 6, 9, 9);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (39, false, 8918.93, 'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.', 8000.47, 7, 6, 3, 8);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (40, true, 3541.26, 'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.', 4202.93, 3, 2, 4, 6);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (41, false, 1283.32, 'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.', 9441.77, 1, 6, 7, 1);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (42, false, 1621.53, 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.', 5812.66, 5, 9, 6, 4);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (43, true, 7652.62, 'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.', 279.1, 8, 3, 5, 9);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (44, true, 8314.26, 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.', 7453.72, 2, 2, 7, 8);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (45, false, 9464.52, 'Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.', 4989.21, 7, 10, 4, 8);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (46, false, 3992.02, 'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.', 1016.42, 2, 9, 10, 4);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (47, true, 287.33, 'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.', 2535.32, 10, 2, 5, 8);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (48, true, 7424.36, 'Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.', 8267.63, 6, 2, 2, 6);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (49, false, 3028.48, 'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.', 9356.86, 6, 7, 10, 2);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (50, false, 874.29, 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.', 5867.77, 10, 8, 7, 9);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (51, true, 805.37, 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 7463.39, 8, 4, 2, 8);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (52, true, 7643.59, 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.', 6571.22, 4, 1, 1, 3);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (53, true, 1019.09, 'Phasellus sit amet erat. Nulla tempus.', 4424.05, 10, 4, 5, 4);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (54, false, 2486.5, 'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.', 6408.42, 7, 9, 2, 7);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (55, false, 12.08, 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 9179.94, 5, 8, 5, 5);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (56, false, 2037.58, 'Suspendisse potenti.', 2880.58, 4, 8, 6, 9);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (57, false, 2540.85, 'In congue. Etiam justo.', 3120.46, 3, 7, 9, 1);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (58, false, 29.73, 'Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.', 9027.8, 6, 6, 7, 10);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (59, false, 5110.77, 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.', 4538.75, 9, 8, 8, 8);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (60, true, 319.88, 'Nulla ac enim.', 5417.98, 5, 10, 6, 9);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (61, true, 6056.89, 'Suspendisse potenti.', 1217.25, 2, 7, 1, 2);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (62, false, 995.79, 'In congue. Etiam justo. Etiam pretium iaculis justo.', 5412.34, 6, 3, 9, 2);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (63, false, 1794.28, 'Integer a nibh.', 5464.58, 9, 4, 8, 4);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (64, false, 3062.95, 'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.', 1851.45, 9, 6, 5, 8);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (65, true, 6286.43, 'Vivamus vestibulum sagittis sapien.', 1516.02, 5, 2, 4, 10);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (66, true, 3354.51, 'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.', 9236.63, 6, 5, 4, 8);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (67, true, 3765.28, 'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.', 8027.66, 8, 10, 6, 9);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (68, true, 6869.02, 'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 4119.3, 1, 10, 4, 10);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (69, true, 4966.04, 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.', 8302.28, 4, 10, 2, 3);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (70, false, 8301.18, 'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.', 7900.48, 9, 1, 9, 4);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (71, false, 7770.23, 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', 5160.9, 1, 1, 10, 4);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (72, true, 4138.76, 'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 3722.53, 8, 9, 4, 5);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (73, false, 2091.03, 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 8199.46, 5, 6, 1, 10);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (74, true, 7587.97, 'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 8993.79, 8, 2, 3, 5);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (75, false, 2752.14, 'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 2897.63, 2, 4, 1, 7);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (76, false, 1160.24, 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 8594.67, 9, 2, 1, 2);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (77, true, 1672.81, 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.', 2135.99, 4, 8, 4, 7);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (78, true, 9186.59, 'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.', 6070.39, 6, 4, 8, 3);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (79, false, 9950.1, 'Proin at turpis a pede posuere nonummy. Integer non velit.', 8104.34, 5, 8, 9, 5);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (80, false, 8590.96, 'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.', 4559.53, 6, 10, 3, 10);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (81, true, 5891.22, 'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 5865.84, 3, 1, 9, 9);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (82, false, 7446.61, 'Praesent blandit lacinia erat.', 3646.99, 1, 6, 4, 5);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (83, true, 650.45, 'Vivamus vel nulla eget eros elementum pellentesque.', 152.6, 10, 3, 4, 6);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (84, true, 6232.51, 'Maecenas tincidunt lacus at velit.', 8886.92, 2, 2, 8, 4);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (85, false, 5652.06, 'Etiam vel augue.', 5168.95, 8, 7, 9, 10);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (86, false, 879.52, 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.', 2900.28, 6, 2, 3, 10);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (87, false, 4356.91, 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 7600.12, 10, 4, 5, 8);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (88, true, 4723.17, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 6869.38, 5, 2, 6, 10);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (89, true, 8448.12, 'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.', 5966.36, 8, 6, 9, 5);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (90, false, 3598.14, 'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 8643.44, 2, 9, 1, 1);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (91, false, 2968.82, 'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.', 8226.94, 5, 3, 5, 3);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (92, false, 9515.25, 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.', 6301.53, 3, 7, 10, 7);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (93, true, 7035.48, 'Pellentesque ultrices mattis odio.', 7001.62, 2, 2, 8, 1);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (94, false, 2126.1, 'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.', 7524.73, 7, 1, 10, 4);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (95, false, 3476.58, 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 6514.04, 1, 7, 7, 1);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (96, false, 2892.93, 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.', 3429.42, 6, 9, 10, 2);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (97, true, 3290.1, 'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.', 1383.31, 10, 1, 2, 8);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (98, false, 3258.3, 'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.', 7545.74, 3, 1, 2, 4);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (99, true, 4218.08, 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.', 6136.29, 1, 3, 2, 1);
insert into house ("addressId", "hasCloset", rent, description, size, "parkingSpots", "livingRooms", suites, bedrooms) values (100, true, 2815.75, 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.', 9212.2, 1, 7, 4, 4);

        `);
  }

  public async down(_: QueryRunner): Promise<void> {}
}