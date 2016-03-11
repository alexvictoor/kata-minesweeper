'use strict';

import { expect } from 'chai';
import { Field } from '../src/Mine';


describe("Minesweeper Kata", () => {

    beforeEach(() => {

    });

    it("Should confirm mine on a field", () => {
      // given
      const array = [[false, true, false], [false, false, false] , [false, false, false]];
      // when
      const field = new Field(array);
      // then
      expect(field.isMined(1, 0)).to.be.eq(true);

    });

    it("Should confirm no mine on a cell", () => {
      // given
      const array = [[false, true, false], [false, false, false] , [false, false, false]];
      // when
      const field = new Field(array);
      // then
      expect(field.isMined(1, 1)).to.be.eq(false);

    });

    it("Should return false outside the field", () => {
      // given
      const array = [[false, true, false], [false, false, false] , [false, false, false]];
      // when
      const field = new Field(array);
      // then
      expect(field.isMined(-1, -1)).to.be.eq(false);

    });

    it("Should return false outside the field", () => {
      // given
      const array = [[false, true, false], [false, false, false] , [false, false, false]];
      // when
      const field = new Field(array);
      // then
      expect(field.isMined(-10, -1)).to.be.eq(false);

    });

    it("Should display one * on mine location", () => {
      // given
      const array = [[false, true, false], [false, false, false] , [false, false, false]];
      const field = new Field(array);
      // when
      const result = field.compute();
      // then
      expect(result[1]).to.be.eq("*");

    });


    it("Should find one mine in the neighbourhood", () => {
      // given
      const array = [[false, true, false], [false, false, false] , [false, false, false]];
      const field = new Field(array);
      // when
      const result = field.computeForOneCell(0, 0);
      // then
      expect(result).to.be.eq(1);

    });

    it("Should find 3 mines around a location", () => {
      // given
      const array = [[true, false, true], [true, false, false] , [false, false, false]];
      const field = new Field(array);
      // when
      const result = field.computeForOneCell(1, 0);
      // then
      expect(result).to.be.eq(3);

    });

    it("Should compute results fro the whole field", () => {
      // given
      const array = [[true, false, false, false], [false, false, false, false], [false, true, false, false], [false, false, false, false]];
      const field = new Field(array);
      // when
      const result = field.compute();
      // then
      expect(result).to.be.eq("*100\n2210\n1*10\n1110\n");

    });
});
