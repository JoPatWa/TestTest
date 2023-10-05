import { mockAvailableTiers } from '@pass-frontend/utility/mock-data-generators';

import { mockSubsidizedDigital } from '@pass-frontend/utility/mock-data-static';

import { calculateTotalAfterRewards, isSubsidized } from './helpers';

 

const [premiumTier] = mockAvailableTiers;

 

describe('Tier Helpers', () => {

  describe('isSubsidized', () => {

    it('return true for subsidized tier', () => {

      expect(isSubsidized(mockSubsidizedDigital)).toBeTruthy();

    });

 

    it('return false for non subsidized tier', () => {

      expect(isSubsidized(premiumTier)).toBeFalsy();

    });

  });

  describe('calculateTotalAfterRewards', () => {

    it('should calculate and return totalCharge and onePassCreditApplied with $100 credit', () => {

      const tierPrice = 59;

      const primaryUserTierPrice = 139;

      const balanceDollarAmount = 100;

      const totalNextPaymentForDependentsOnly = 99;

 

      expect(

        calculateTotalAfterRewards(

          tierPrice,

          primaryUserTierPrice,

          balanceDollarAmount,

          totalNextPaymentForDependentsOnly

        )

      ).toEqual({

        totalCharge: '59.00',

        onePassCreditApplied: '0.00',

      });

    });

    it('should calculate and return totalCharge and onePassCreditApplied with $400 credit', () => {

      const tierPrice = 59;

      const primaryUserTierPrice = 139;

      const balanceDollarAmount = 400;

      const totalNextPaymentForDependentsOnly = 99;

 

      expect(

        calculateTotalAfterRewards(

          tierPrice,

          primaryUserTierPrice,

          balanceDollarAmount,

          totalNextPaymentForDependentsOnly

        )

      ).toEqual({

        totalCharge: 0,

        onePassCreditApplied: '59.00',

      });

    });

  });

});